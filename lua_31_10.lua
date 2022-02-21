enablezz   = false
enablesrc  = false
bestTOUMX  = 0 --Memorizes the probability of the best chance
n          = 0
N          = 0
n          = 1
bestchain  = 0 --memorizes the value of the most rare series
indice     = 1 --index of the rarest series at the last control
pr         = 0 --memorizes profit/progression
prinitiale = pr

--balance=10000 --simulation

div = 100000000 ---------------base unit
--balance = 10000 --simulation, delete if playing for real
frequence_affichage = 10 --displays simulation info every 100 bets for example
--____________________SETTINGS______
agressivite = 19 --[[increases/decreases martingales' best minimum increase 
for instance with multiplier=2 and aggressivite = 50 after every loses, wager are increase by 150%) ]]--
casino     = 1 --% edge house
chancePRLL = 98 --chance to pre roll
maxchance  = 64 -- max chance authorized
minchance  = 5 --minimum chance authorized
NBRchance  = 100 --number of chance analyzed
target     = balance*1.9 --STOP_IF_BALANCE_OVER
limite     = 0 --STOP_IF_BALANCE_UNDER
bb         = balance / 20000 -------------------base bet
bbPRLL     = bb/2 --pre roll base bet
NBM        = 44 --[[probability of the series
(for instance with NBM=100 we are looking for series that have 1 chance in 100 ) ]]--
--_________________________________

B=balance-limite---it's the part of the scale at stake

--REMPLISSAGE DES TABLES_____________________________________________
Tch={} --chance
Tover={} --chaine lose over
Tunder={} --chaine lose under
TOUMX={}  --plus grande chaine entre over/under
Tsens={} --mémorise sens de chaque chaine
Tn={} --chaine lose min

A = minchance-((maxchance-minchance)/(NBRchance-1))
for x=1,NBRchance,1 do --Remplis les table selectione les chances
A +=(maxchance-minchance)/(NBRchance-1)
Tch[x] = A --chance
Tover[x]=0 --chaine lose over
Tunder[x]=0 --chaine lose under
TOUMX[x]=0 --plus grande chaine entre over/under
Tn[x]=0 --chaine lose min
Tsens[x]=0 --mémorise sens de chaque chaine
end

--[[ for x=1,NBRchance,1 do --table serie win min
    if Tch[x]==nil then break end
    Tn[x]=math.ceil(math.log(1/NBM)/math.log((Tch[x])/100))
end --]]

for x=1,NBRchance,1 do --table serie lose min
    if Tch[x]==nil then break end
    Tn[x]=math.ceil(math.log(1/NBM)/math.log((100-Tch[x])/100))
end

x=0
--___________________________________________________________________

--FONCTION_______________________________________________________________

function calcul_increase()

    payout=(100 - casino)/chance
    q=((1+(1/(payout-1)))-1)*(1+(agressivite/100))+1
    inc=(q-1)*100

end

MRTGLLOPT=false
function martingale_optimise() --optimizing the base bet to use 100% of the balance

    if (lastBet.profit >= 0) then -- if win
        B=balance-limite-0.00000001
        n = math.log((B/bb)*(-1+q)+1)/math.log(q) 
        n=math.floor(n) 
        nextbet=B/((1-q^n)/(1-q)) -- bet maximum amount to cash these "n" loses
    else
        nextbet = previousbet*q
    end
    
    print("INCREASE= " ..inc .."%")
    print("MAX SERIES OF POSSIBLE LOSSES= " ..n-1 )

end

function reset_to_preroll()

    if (lastBet.profit >= 0) then -- if win then
        if bestTOUMX < Tn[indice] then
            chance=chancePRLL
            nextbet=bbPRLL
            MRTGLLOPT=false
        end
    end --return to preroll after win 

end

function cherche_serie_de_win()
    for x=1,NBRchance,1 do

        if Tch[x]==nil then break end

        if lastBet.roll < Tch[x] then
            Tunder[x] +=1
        else
            Tunder[x] =0
        end

        if lastBet.roll > (100-Tch[x]-0.01) then
            Tover[x] +=1
        else
            Tover[x] =0
        end

        if Tunder[x] >= Tover[x] then
            TOUMX[x]=Tunder[x]
            Tsens[x]=false
        else
            TOUMX[x]=Tover[x]
            Tsens[x]=true
        end
    end
end

function cherche_serie_de_lose()
    for x=1,NBRchance,1 do

        if Tch[x]==nil then break end

        if lastBet.roll < Tch[x] then
            Tunder[x] =0
        else
            Tunder[x] +=1
        end

        if lastBet.roll > (100-Tch[x]-0.01) then
            Tover[x] =0
        else
            Tover[x] +=1
        end

        if Tunder[x] >= Tover[x] then
            TOUMX[x]=Tunder[x]
            Tsens[x]=false
        else
            TOUMX[x]=Tover[x]
            Tsens[x]=true
        end
    end
end

function selection_indice_de_la_best_serie_win()
    for x=1,NBRchance,1 do

        if Tch[x]==nil then break end
        if (1/(((Tch[x])/100)^TOUMX[x])) > bestchain then
            bestchain=(1/(((Tch[x])/100)^TOUMX[x]))
            indice=x
            bestTOUMX=TOUMX[indice]
        end
    end
    if bestTOUMX >= Tn[indice] and (lastBet.profit >= 0) then
        MRTGLLOPT=true
        bestchain=0 --pour garder en mémoire même si la serie est cassé
        chance=Tch[indice]
        bethigh=Tsens[indice]
    end
end

function selection_indice_de_la_best_serie_lose()
    for x=1,NBRchance,1 do

        if Tch[x]==nil then break end
        if (1/(((100-Tch[x])/100)^TOUMX[x])) > bestchain then
            bestchain=(1/(((100-Tch[x])/100)^TOUMX[x]))
            indice=x
            bestTOUMX=TOUMX[indice]
        end
    end
    if bestTOUMX >= Tn[indice] and ((lastBet.profit >= 0) or chance==chancePRLL) then
        MRTGLLOPT=true
        chance=Tch[indice]
        bethigh=Tsens[indice]
    end
end

function limiteSTOP(target,limite)
    if balance > target then
        simuInfo()
        print("TARGET REACHED !!!!!!!!!!!!!!")
        stop()
    elseif  balance-nextbet < limite then
        simuInfo()
        print(".............................")
        stop()  
    end
end

bbDB = bb
startbank = balance

function simuInfo()
    print("#=========================================#")
    print("                 #---===--- The Eagle Flies! ---===---#                 ")
    print("#=========================================#")
    print("# [Bank de départ = " ..string.format("%9.8f", startbank) .. " ]-")
    print("# [Bet de base = " ..string.format("%9.8f", bbDB) .. " ]-")
    print("#=========================================#")
    print("# [Chance: " ..string.format("%9.8f", chance) .. " ]-")
    print("# [nextbet: " ..string.format("%9.8f", nextbet) .." ROLL  n° " ..bets .." ]-")
    print("#----------------------------------------------------------------------------------#")
    print("# [profit: " ..string.format("%9.8f", profit) .." (balance x" ..string.format("%2.2f",((balance)/(startbank))) ..") ]-")
    print("# [Max mis en jeu: " ..string.format("%9.8f", maxUse) .. " ]-")
    print("# [wagered: " ..string.format("%9.8f", wagered) .." (" ..string.format("%2.2f",wagered/(startbank)) .." x start balance) ]-")
    print("# [Avg profit/bet: " ..string.format("%9.8f", profit/bets/bbDB) .." x base bet ]-")
    print("# [Avg wag/bet: " ..string.format("%9.8f", wagered/bets) .." ]-")
    print("# [PROFIT MAX= " ..bestID .." ]-")
    print("# [PERTE MAX= " ..badID .." ]-")
    print("#=========================================#\n\n\n")
end

perteP = 0
p = false
maxUse = 0
bestID,badID,pirePERTE,bestPROFIT=0,0,0,0
function calculPrint()
    if p == true then
        --print(balance)
        print(chance)
        print(nextbet)
        print(coef)
    end

    perteP +=currentprofit
    if perteP >= 0 then perteP = 0 end

    if -perteP + nextbet > maxUse then maxUse = -perteP + nextbet end
    
    if bets%frequence_affichage==0 then
        simuInfo()
    end
    
    if currentprofit >= bestPROFIT then
        bestID = lastBet.id
        bestPROFIT = currentprofit
    end

    if currentprofit <= pirePERTE then
        badID = lastBet.id
        pirePERTE = currentprofit
    end
end
--_______________________________________________________________________

chance=chancePRLL
nextbet=bbPRLL

debugg = false
function dobet()

    if debugg == true then
        if bethigh==true then sens24 = "over" else sens24 = "under" end
        if win then gain24 = " win" else gain24 = "lose" end
        
        print("================================")
        print("=[Amount" .."  ][  " .."sens" .."    ][  " .."Chance" .."  ][  " .."gain]=")
        print("=[" ..string.format("%9.2f",previousbet) .."  ][  " ..sens24 .."  ][  "..string.format("%1.2f",chance).."      ][  "..gain24 .." ]=")
        print("================================")
    end

    pr +=currentprofit
    
    cherche_serie_de_lose()
    --cherche_serie_de_win()
    
    bestchain=0
    selection_indice_de_la_best_serie_lose()
    --selection_indice_de_la_best_serie_win()
    
    reset_to_preroll()
    
    if MRTGLLOPT==true then
        calcul_increase()
        martingale_optimise()
    end
    
    calculPrint()
    limiteSTOP(target,limite)
    --simu_printInfo()
    --chance = math.floor((chance*100)+0.5)/100 -- wolf bet
end