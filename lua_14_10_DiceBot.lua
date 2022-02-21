chance1 = 56.57; payout1 = 1.75; multiply1 = 2.44--; timeToRun1 = 4
chance2 = 39.60; payout2 = 2.5; multiply2 = 1.78--; timeToRun2 = 5
chance3 = 30.00; payout3 = 3.3; multiply3 = 1.71--; timeToRun3 = 7
chance4 = 26.40; payout4 = 3.75; multiply4 = 1.52--; timeToRun4 = 8
chance5 = 22.00; payout5 = 4.5; multiply5 = 1.46--; timeToRun5 = 9
chance6 = 19.80; payout6 = 5; multiply6 = 1.36--; timeToRun6 = 10
chance7 = 18.00; payout7 = 5.5; multiply7 = 1.33--; timeToRun7 = 11
chance8 = 16.50; payout8 = 6; multiply8 = 1.27--; timeToRun8 = 12
chance9 = 15.00; payout9 = 6.6; multiply9 = 1.25--; timeToRun9 = 13
chance10 = 13.75; payout10 = 7.2; multiply10 = 1.2--; timeToRun10 = 14
chance11 = 12.00; payout11 = 8.25; multiply11 = 1.17--; timeToRun11 = 14
chance12 = 11.00; payout12 = 9; multiply12 = 1.15--; timeToRun11 = 14
chance13 = 9.9; payout13 = 10; multiply13 = 1.13--; timeToRun11 = 14
math.randomseed(os.time()) -- random initialize
math.random(); math.random(); math.random() -- warming up
listChance = {chance1,chance2,chance3,chance4,chance5,chance6,chance7,chance8,chance9,chance10,chance11,chance12,chance13}
listPayout = {payout1,payout2,payout3,payout4,payout5,payout6,payout7,payout8,payout9,payout10,payout11,payout12,payout13}
listMultiply = {multiply1,multiply2,multiply3,multiply4,multiply5,multiply6,multiply7,multiply8,multiply9,multiply10,multiply11,multiply12,multiply13}
--listTimeToRun = {timeToRun1,timeToRun2,timeToRun3,timeToRun4,timeToRun5,timeToRun6,timeToRun7}
listDivideBalance = {2500,5000,10000,20000,40000}; divideBalance = 6000; 
listBaseBet = {balance/listDivideBalance[1],balance/listDivideBalance[2],balance/listDivideBalance[3],balance/listDivideBalance[4],balance/listDivideBalance[5]}
divideMax = 30; currentmaxbet = balance/divideMax;sleepbet = 0.00000001
listBet = {}
count = 0
bet = 0
while count <= #listChance do
    table.insert(listBet, listBaseBet[math.random(1, 5)])
    count = count + 1
end
bet = basebet;
chance = chance1; payout = payout1; multiply = multiply1; timeToRun = 99; timeToRunPlus = 0;e = 0; lowProfit = 0; highProfit = 0

num_random = 0; CHANCE_RANDOMIZER = 0



baseChance_2 = 78.57; newChange_2 = 49.50; highChance_2 = 24.75;superChance_2 = 9.9;chance_2 = baseChance_2
payout_2     = 1.26;newPayout_2 = 2;highPayout_2 = 4; superPayout_2 = 10
multiply_2 = 2;multiplyHighChance_2 = 1.5;multiplySuperChance_2 = 1.13
divideBalance_2 = 18000;basebet_2 = balance/divideBalance_2
taget_2 = 5;nextbet_2 = basebet_2;maxLoseStreak_2 = 5

listDivideBalance_3 = {2500,5000,10000,20000,40000}; divideBalance_3 = 6000; basebet_3 = balance/divideBalance_3

divideBalance_4 = 2600
bigBet   = balance/divideBalance_4

divideBalance_5 = 3500
bigBet_5   = balance/divideBalance_5
betBackUp = bigBet

divideBalance_6 = 700
big_6           = balance/divideBalance_6
mainBig_6       = big_6
timeToBig = math.random(5,15)

chance_7 = 49.5; multiplier_7 = 2;divideBalance_7 = 345; baseBase_7 = balance/divideBalance_7;base_7 = baseBase_7
mutiafter_7  = 4;afterMulti_7 = 4;resetWin_7   = 4

currentLose_8 = 0;stepChance_8=5;divideBalance_8 = 250000;base_8 = balance/divideBalance_8;maxChance_8=75

divideBalance_9 = 30000; baseBig_9 = balance/divideBalance_9; bigBackUp_9 = baseBig_9; chanceBig_9 = 9.9; multiplierBig_9 = 1.15

typeBet = math.random(2, 8)
if(typeBet == 1 or typeBet == 3 or typeBet == 4 or typeBet == 5 or typeBet == 6) then
    nextbet = sleepbet
    chance = superChance_2
elseif(typeBet == 2)then
    nextbet = basebet_2
    chance = baseChance_2
elseif(typeBet == 7)then
    nextbet = base_7
    chance = chance_7
elseif(typeBet == 8)then
    nextbet = base_8
    chance = chance3
elseif(typeBet == 9)then
    nextbet = baseBig_9
    chance = chanceBig_9
end

multiplyProfit = 1.01; takeprofit = balance*multiplyProfit; oldBalace = balance;
targetToStop = balance*100
secondSleep = 0


function dobet()
    function hiloRandomizer()
        hiloRandomizer = math.random(0, 1); 
        if (hiloRandomizer == 1) then 
            bethigh = true
        else 
            bethigh = false
        end
    end
     
    function seedRandomizer()
        seedRandomizer = math.random(1, 2)
        while (seedRandomizer >= 1) do 
            resetseed()
            seedRandomizer = seedRandomizer - 1
        end
    end
    
    function randomChane(start,sizeList)
        CHANCE_RANDOMIZER = math.random(start, sizeList);
        chance = listChance[CHANCE_RANDOMIZER]
        payout = listPayout[CHANCE_RANDOMIZER]
        multiply = listMultiply[CHANCE_RANDOMIZER]
        bet = listBet[CHANCE_RANDOMIZER]
        --timeToRun = listTimeToRun[CHANCE_RANDOMIZER]
    end

    

    function dobet1()
        e = currentstreak + timeToRun
        if win then
            if(nextbet >= currentmaxbet)then
                timeToRunPlus = timeToRunPlus+1
            elseif(nextbet <= currentmaxbet and nextbet > sleepbet and timeToRunPlus > 0)then
                timeToRunPlus = timeToRunPlus-0.5
            end
            hiloRandomizer()
            if(nextbet ~= sleepbet)then
                listBet[CHANCE_RANDOMIZER] = listBaseBet[math.random(1, 5)]
                seedRandomizer()
            end
            randomChane(1,#listChance)
            num_random = CHANCE_RANDOMIZER
            nextbet = sleepbet
            timeToRun = math.floor(payout*(math.random(1, 3)+math.floor(timeToRunPlus+0.5))+0.5)
        else
            if(e<=0 and num_random > 1)then
                if(nextbet ~= sleepbet)then
                    listBet[CHANCE_RANDOMIZER] = nextbet*multiply
                end
                if(num_random >= 11)then
                    randomChane(num_random,#listChance)
                else
                    randomChane(num_random,num_random+2)
                end
                nextbet = bet
                --sleep(secondSleep)
            end
        end
        print("[Payout]:   ["..string.format("%d",e).."]  ["..string.format("%.2f",payout).."]")
        print("[Base Bet]: ["..string.format("%.8f",bet).."]  ["..string.format("%.4f",bet/(oldBalace)*100).."]%")
    end

    function dobet2()
        if win then
            if(nextbet*payout_2 < basebet_2*taget_2)then
                nextbet = nextbet*payout_2
            else
                nextbet = basebet_2
                basebet_2   = balance/divideBalance_2
                chance = baseChance_2
                hiloRandomizer()
                seedRandomizer()
            end
            if(chance == newChange_2)then
                nextbet = basebet_2
                chance = baseChance_2
            end
        else
            if(currentstreak*-1 == 1)then
                chance = newChange_2
                nextbet = basebet_2*multiply_2
            else
                if(currentstreak*-1 == maxLoseStreak_2)then
                    nextbet = nextbet*newPayout_2/(payout_2-1)
                    chance = baseChance_2
                elseif(currentstreak*-1 == maxLoseStreak_2+1)then
                    chance = highChance_2
                    nextbet = nextbet*payout_2/(highPayout_2-1)
                elseif(currentstreak*-1 == maxLoseStreak_2*2)then
                    chance = superChance_2
                    nextbet = nextbet*highPayout_2/(superPayout_2-1)
                else
                    if(chance == newChange_2)then
                        nextbet = nextbet*multiply_2
                    elseif(chance == highChance_2)then
                        nextbet = nextbet*multiplyHighChance_2
                    elseif(chance == superChance_2)then
                        nextbet = nextbet*multiplySuperChance_2
                    end
                end
            end
        end    
    end

    function dobet3()
        e = currentstreak + timeToRun
        if win then
            if(nextbet >= currentmaxbet)then
                timeToRunPlus = timeToRunPlus+1
            elseif(nextbet <= currentmaxbet and nextbet > sleepbet and timeToRunPlus > 0)then
                timeToRunPlus = timeToRunPlus-0.5
            end
            hiloRandomizer()
            if(nextbet ~= sleepbet)then
                seedRandomizer()
            end
            randomChane(1,#listChance)
            nextbet = sleepbet
            check=true
            timeToRun = math.floor(payout*(math.random(2, 4)+math.floor(timeToRunPlus+0.5))+0.5)
        else
            if(e == 0 and check==true)then
                divideBalance = listDivideBalance[math.random(1, #listDivideBalance)]
                basebet_3 = balance/divideBalance_3
                nextbet = basebet_3
                check = false
            elseif(e<0)then
                nextbet = nextbet*multiply
                --sleep(secondSleep)
            end
        end
        print("[Payout]:   ["..string.format("%d",e).."]  ["..string.format("%.2f",payout).."]")
        print("[Base Bet]: ["..string.format("%.8f",basebet_3).."]  ["..string.format("%.4f",basebet_3/(oldBalace)*100).."]%")
    end
        
    function dobet4()
        if win then
            if(chance ==  superChance_2 and nextbet > sleepbet)then
                hiloRandomizer()
            elseif(chance == chanceHigh or chance == chanceSuper or chance == chanceUltra)then
                seedRandomizer()
            end
            nextbet = sleepbet
            chance = superChance_2
        else
            if(currentstreak*-1 == 20)then
                nextbet = bigBet
            elseif (currentstreak*-1 > 20 and currentstreak*-1 < 30)then
                nextbet = nextbet*multiplySuperChance_2
            elseif (currentstreak*-1 == 30)then
                nextbet = nextbet*superPayout_2/(highPayout_2 -1)
                chance = highChance_2
            elseif (currentstreak*-1 > 30 and currentstreak*-1 < 34)then
                nextbet = nextbet*multiplyHighChance_2
            elseif (currentstreak*-1 == 34)then
                nextbet = nextbet*highPayout_2/(newPayout_2 -1)
                chance = newChange_2
            elseif (currentstreak*-1 > 34 and currentstreak*-1 < 36)then
                nextbet = nextbet*multiply_2
            elseif (currentstreak*-1 == 36)then
                nextbet = nextbet*newPayout_2/(payout_2 -1)
                chance = baseChance_2
            end
        end
    end

    function dobet5()
        if win then
            if(nextbet > sleepbet)then
                hiloRandomizer()
                seedRandomizer()
                betBackUp = bigBet_5
            end
            chance = superChance_2
            nextbet = sleepbet
        else
            if(currentstreak*-1 == 20)then
                nextbet = betBackUp
            elseif (currentstreak*-1 > 20 and currentstreak*-1 < 30)then
                nextbet = nextbet*multiplySuperChance_2
            elseif (currentstreak*-1 == 30)then
                betBackUp = nextbet*multiplySuperChance_2
                nextbet = sleepbet
            end
        end
    end

    function dobet6()
        if win then
            if(nextbet > sleepbet)then
                timeToBig = math.random(5,15)
                if(big_6 * payout_2 < mainBig_6*2)then
                    big_6 = big_6 * payout_2  
                else
                    big_6 = mainBig_6
                    seedRandomizer()
                end
                hiloRandomizer()
            end
            chance      = superChance_2
            nextbet     = sleepbet  
        else
            if(nextbet > sleepbet)then
                big_6 = big_6*(1/(payout_2-1)+1)
                nextbet = sleepbet
                hiloRandomizer()
            end
            if(currentstreak*-1 == timeToBig) then
                nextbet = big_6
                chance = baseChance_2
            else
                nextbet = sleepbet
                chance = superChance_2
            end
        end
    end

    function dobet7()
        if win then
            if(currentstreak % resetWin_7 == 0 and base_7 > baseBase_7) then
                base_7 = base_7/afterMulti_7
                hiloRandomizer()
                seedRandomizer()
            end
            nextbet = base_7        
        else
            if ((currentstreak*-1) % mutiafter_7 == 0) then
                base_7 = base_7*afterMulti_7
                nextbet = base_7
                hiloRandomizer()
                seedRandomizer()
            else
                nextbet = nextbet * multiplier_7
            end
        end
    end

    function dobet8()
        if win then
            currentLose_8 = 0
            if(chance ~= chance3)then
                hiloRandomizer()
            end
            chance      = chance3
            nextbet     = base_8
        else
            currentLose_8 = currentLose_8+nextbet
            if(chance < maxChance_8) then
                chance = chance + stepChance_8
            else
                chance = chance3
                hiloRandomizer()
                seedRandomizer()
            end
            nextbet = nextbet+(currentLose_8)*1.2/(99/chance-1)
        end
    end

    function dobet9()
        if win then
            if(nextbet ~= sleepbet)then
                hiloRandomizer()
                seedRandomizer()
            end
            nextbet = baseBig_9
            bigBackUp_9 = baseBig_9
            
        else
            if(currentstreak*-1 < 20)then
                bigBackUp_9 = nextbet*multiplierBig_9
                nextbet = bigBackUp_9
            elseif(currentstreak*-1 == 20)then
                bigBackUp_9 = nextbet*multiplierBig_9
                nextbet = sleepbet
            end
        end
    end


    print("[Type Bet]: ["..string.format("%d",typeBet).."]")
    if(typeBet == 1)then
        dobet1()
    elseif(typeBet == 2)then
        dobet2()
    elseif(typeBet == 3)then
        dobet3()
    elseif(typeBet == 4)then
        dobet4()
    elseif(typeBet == 5)then
        dobet5()
    elseif(typeBet == 6)then
        dobet6()
    elseif(typeBet == 7)then
        dobet7()
    elseif(typeBet == 8)then
        dobet8()
    elseif(typeBet == 9)then
        dobet9()
    end

    if(balance >= takeprofit)then
        takeprofit = balance*multiplyProfit
        basebet_2   = balance/divideBalance_2
        bigBet   = balance/divideBalance_4
        bigBet_5   = balance/divideBalance_5
        big_6           = balance/divideBalance_6;mainBig_6_6 = big
        baseBase_7_7 = balance/divideBalance_7;base_7 = baseBase_7_7
        base_8 = balance/divideBalance_8
        baseBig_9 = balance/divideBalance_9; bigBackUp_9 = baseBig_9
        listBaseBet = {balance/listDivideBalance[1],balance/listDivideBalance[2],balance/listDivideBalance[3],balance/listDivideBalance[4],balance/listDivideBalance[5]}
        count = 0
        while count <= #listChance do
            table.insert(listBet, listBaseBet[math.random(1, 5)])
            count = count + 1
        end
        typeBet = math.random(2, 8)
        if(typeBet == 1 or typeBet == 3 or typeBet == 4 or typeBet == 5 or typeBet == 6) then
            nextbet = sleepbet
            chance = superChance_2
        elseif(typeBet == 2)then
            nextbet = basebet_2
            chance = baseChance_2
        elseif(typeBet == 7)then
            nextbet = base_7
            chance = chance_7
        elseif(typeBet == 8)then
            nextbet = base_8
            chance = chance3
        elseif(typeBet == 9)then
            nextbet = baseBig_9
            chance = chanceBig_9
        end
    end
    
    if(balance >= targetToStop)then
        stop()
        print("===> [GET RICK...]");
    end
    if(profit > highProfit)then
        highProfit = profit
    elseif(profit < lowProfit)then
        lowProfit = profit
    end
    print("[Chance]:   ["..string.format("%.2f",chance).."]")  
    print("[Bet High]: ["..tostring(bethigh).."]")
    print("[Next Bet]: ["..string.format("%.8f",nextbet).."]  ["..string.format("%.4f",nextbet/(oldBalace)*100).."]%")
    print("[Profit]:   ["..string.format("%.8f",profit).."]  ["..string.format("%.4f",profit/(oldBalace)*100).."]%")
    print("[High PF]:  ["..string.format("%.8f",highProfit).."]  ["..string.format("%.4f",highProfit/(oldBalace)*100).."]%")
    print("[Low PF]:   ["..string.format("%.8f",lowProfit).."]  ["..string.format("%.4f",lowProfit/(oldBalace)*100).."]%")
    print("==========================");
end