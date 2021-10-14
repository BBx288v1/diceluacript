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
multiplyProfit = 1.05; takeprofit = balance*multiplyProfit; oldBalace = balance; bet = basebet;
nextbet = sleepbet; chance = chance1; payout = payout1; multiply = multiply1; timeToRun = 99; timeToRunPlus = 0;e = 0; lowProfit = 0; highProfit = 0
targetToStop = balance*1.5
secondSleep = 0.2
num_random = 0; CHANCE_RANDOMIZER = 0
math.randomseed(os.time()) -- random initialize
math.random(); math.random(); math.random() -- warming up

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
        seedRandomizer = math.random(1, 5)
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
            if(num_random <=4)then
                randomChane(2,num_random)
            else
                randomChane(num_random-2,num_random)
            end
            nextbet = bet
            sleep(secondSleep)
        end
    end
    if(balance >= takeprofit)then
        resetseed()
        takeprofit = balance*multiplyProfit
        listBaseBet = {balance/listDivideBalance[1],balance/listDivideBalance[2],balance/listDivideBalance[3],balance/listDivideBalance[4],balance/listDivideBalance[5]}
    end
    if(balance >= targetToStop)then
        stop()
        print("GET RICK!");
    end
    if(profit > highProfit)then
        highProfit = profit
    elseif(profit < lowProfit)then
        lowProfit = profit
    end
    print("[To Bet]:   ["..string.format("%d",e).."]")
    print("[Payout]:   ["..string.format("%.2f",payout).."]")
    print("[Bet High]: ["..tostring(bethigh).."]")
    print("[Base Bet]: ["..string.format("%.8f",bet).."]  ["..string.format("%.4f",bet/(oldBalace)*100).."]%")
    print("[Next Bet]: ["..string.format("%.8f",nextbet).."]  ["..string.format("%.4f",nextbet/(oldBalace)*100).."]%")
    print("[Profit]:   ["..string.format("%.8f",profit).."]  ["..string.format("%.4f",profit/(oldBalace)*100).."]%")
    print("[High PF]:  ["..string.format("%.8f",highProfit).."]  ["..string.format("%.4f",highProfit/(oldBalace)*100).."]%")
    print("[Low PF]:   ["..string.format("%.8f",lowProfit).."]  ["..string.format("%.4f",lowProfit/(oldBalace)*100).."]%")
    print("==========================");
end