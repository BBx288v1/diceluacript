chance1 = 49.5; payout1 = 2; multiply1 = 2.05--; timeToRun1 = 4

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
listChance = {chance1,chance2,chance3,chance4,chance5,chance6,chance7,chance8,chance9,chance10,chance11,chance12,chance13}
listPayout = {payout1,payout2,payout3,payout4,payout5,payout6,payout7,payout8,payout9,payout10,payout11,payout12,payout13}
listMultiply = {multiply1,multiply2,multiply3,multiply4,multiply5,multiply6,multiply7,multiply8,multiply9,multiply10,multiply11,multiply12,multiply13}
--listTimeToRun = {timeToRun1,timeToRun2,timeToRun3,timeToRun4,timeToRun5,timeToRun6,timeToRun7}
listDivideBalance = {10000,20000,30000,40000,50000}; divideBalance = 6000; basebet = balance/divideBalance; divideMax = 30; currentmaxbet = balance/divideMax;sleepbet = 0.00000001
multiplyProfit    = 1.02; takeprofit = balance*multiplyProfit; oldBalace = balance
nextbet           = sleepbet; chance = chance1; payout = payout1; multiply = multiply1; timeToRun = 99; timeToRunPlus = 0;e = 0; lowProfit = 0; highProfit = 0
maxBet = 0

listPayout_2   = {1.1,1.12,1.13,1.15,1.19,1.26,1.43,2}
listChance_2   = {90,88.39,87.61,86.08,83.19,78.57,69.23,49.5}
chance       = listChance_2[1]
payout       = listPayout_2[1]
divedeBalance_2 = 32800; base_2 = balance/divedeBalance_2;currentbase_2 = base_2;nextbet = base_2
mainTargetFirst = 10;targetFirst = mainTargetFirst
countTime1 = 0
timeToReset = 250


targetToStop      = balance*1.2
secondSleep       = 0.0
math.randomseed(os.time()) -- random initialize
math.random(); math.random(); math.random() -- warming up
resetseed()
typeBet = math.random(1, 2);typeBet = math.random(1, 2);typeBet = math.random(1, 2);typeBet = math.random(1, 2);typeBet = math.random(1, 2)
if(typeBet == 1)then
    randomChane()
    nextbet = sleepbet
elseif(typeBet == 2)then
    randomDice()
    nextbet = base_2
end

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
        seedRandomizer = math.random(0, 2)
        while (seedRandomizer >= 1) do 
            resetseed()
            seedRandomizer = seedRandomizer - 1
        end
    end
    
    function randomChane()
        CHANCE_RANDOMIZER = math.random(1, #listChance);
        chance = listChance[CHANCE_RANDOMIZER]
        payout = listPayout[CHANCE_RANDOMIZER]
        multiply = listMultiply[CHANCE_RANDOMIZER]
        --timeToRun = listTimeToRun[CHANCE_RANDOMIZER]
    end
    function randomDice()
        NUMRAND = math.random(1, #listChance_2)
        chance = listChance_2[NUMRAND]
        payout = listPayout_2[NUMRAND]
    end
    function dobet_1()
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
            randomChane()
            nextbet = sleepbet
            check=true
            timeToRun = math.floor(payout*(math.random(2, 4)+math.floor(timeToRunPlus+0.5))+0.5)
        else
            if(e == 0 and check==true)then
                divideBalance = listDivideBalance[math.random(1, #listDivideBalance)]
                basebet = balance/divideBalance 
                nextbet = basebet
                check = false
            elseif(e<0)then
                nextbet = nextbet*multiply
                --sleep(secondSleep)
            end
        end
        print("[To Bet]:     ["..string.format("%d",e).."]")
        print("[Payout]:    ["..string.format("%.2f",payout).."]")
        print("[Base Bet]: ["..string.format("%.8f",basebet).."]  ["..string.format("%.4f",basebet/(balance)*100).."]%")
    end
    function dobet_2()
        if win then        
            if(nextbet*payout < currentbase_2 * targetFirst) then
                nextbet   = nextbet*payout
            else
                loseStreak = 0
                base_2 = balance/divedeBalance_2;currentbase_2 = base_2
                nextbet = base_2
                targetFirst = mainTargetFirst
                randomDice()
                hiloRandomizer()
            end
        else
            currentbase_2 = currentbase_2*2
            nextbet = currentbase_2
            targetFirst = 2
            randomDice()
            hiloRandomizer()
        end
        if(bets % timeToReset == 0)then
            seedRandomizer()
        end
        print("[Chance]:  ["..string.format("%.2f",chance).."]")  
        print("[Target]:   ["..string.format("%.4f",targetFirst).."]X") 
        print("[Base]:      ["..string.format("%.8f",currentbase_2).."]  ["..string.format("%.4f",currentbase_2/(balance)*100).."]%")
    end

    print("[Type Bet]: ["..string.format("%d",typeBet).."]")
    print("[Bets]:  ["..string.format("%d",bets).."]")  
    if(typeBet == 1)then
        dobet_1()
    elseif(typeBet == 2)then
        dobet_2()
    end


    if(balance >= takeprofit)then
        resetseed()
        takeprofit = balance*multiplyProfit
        typeBet = math.random(1, 2);typeBet = math.random(1, 2);typeBet = math.random(1, 2);typeBet = math.random(1, 2);typeBet = math.random(1, 2)
        if(typeBet == 1)then
            randomChane()
            nextbet = sleepbet
        elseif(typeBet == 2)then
            randomDice()
            nextbet = base_2
        end
    end
    if(balance >= targetToStop)then
        stop()
        print("[...GET...RICK...]");
    end
    if(nextbet > maxBet)then
        maxBet = nextbet
    end
    if(profit > highProfit)then
        highProfit = profit
    elseif(profit < lowProfit)then
        lowProfit = profit
    end
    print("[Bet High]:  ["..tostring(bethigh).."]")
    print("[Max Bet]:  ["..string.format("%.8f",maxBet).."]  ["..string.format("%.4f",maxBet/(balance)*100).."]%")
    print("[Next Bet]:  ["..string.format("%.8f",nextbet).."]  ["..string.format("%.4f",nextbet/(oldBalace)*100).."]%")
    print("[Profit]:       ["..string.format("%.8f",profit).."]  ["..string.format("%.4f",profit/(oldBalace)*100).."]%")
    print("[High PF]:   ["..string.format("%.8f",highProfit).."]  ["..string.format("%.4f",highProfit/(oldBalace)*100).."]%")
    print("[Low PF]:   ["..string.format("%.8f",lowProfit).."]  ["..string.format("%.4f",lowProfit/(oldBalace)*100).."]%")
    print("==========================");
end