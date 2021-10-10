chance1 = 70.71; payout1 = 1.4; multiply1 = 3.61; timeToRun1 = 3
chance2 = 56.57; payout2 = 1.75; multiply2 = 2.44; timeToRun2 = 4
chance3 = 39.60; payout3 = 2.5; multiply3 = 1.78; timeToRun3 = 5
chance4 = 30.00; payout4 = 3.3; multiply4 = 1.54; timeToRun4 = 7
chance5 = 26.40; payout5 = 3.75; multiply5 = 1.47; timeToRun5 = 8
chance6 = 22.00; payout6 = 4.5; multiply6 = 1.4; timeToRun6 = 9
chance7 = 19.80; payout7 = 5; multiply7 = 1.36; timeToRun7 = 10
listChance = {chance1,chance2,chance3,chance4,chance5,chance6,chance7}
listPayout = {payout1,payout2,payout3,payout4,payout5,payout6,payout7}
listMultiply = {multiply1,multiply2,multiply3,multiply4,multiply5,multiply6,multiply7}
listTimeToRun = {timeToRun1,timeToRun2,timeToRun3,timeToRun4,timeToRun5,timeToRun6,timeToRun7}
divideBalance = 2500; basebet = balance/divideBalance; divideMax = 30; currentmaxbet = balance/divideMax;sleepbet = 0.00000001
multiplyProfit = 1.05; takeprofit = balance*multiplyProfit
nextbet = sleepbet; chance = chance1; payout = payout1; multiply = multiply1; timeToRun = timeToRun1; timeToRunPlus = 0;e = 0
targetToStop = balance*100; oldBalace = balance
secondSleep = 0.5


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
    
    function randomChane()
        CHANCE_RANDOMIZER = math.random(1, 7);
        chance = listChance[CHANCE_RANDOMIZER]
        payout = listPayout[CHANCE_RANDOMIZER]
        multiply = listMultiply[CHANCE_RANDOMIZER]
        timeToRun = listTimeToRun[CHANCE_RANDOMIZER]
    end

    e = currentstreak + timeToRun


    if win then
        if(nextbet >= currentmaxbet)then
            timeToRunPlus = timeToRunPlus+1
        elseif(nextbet <= currentmaxbet and nextbet > sleepbet and timeToRunPlus > 0)then
            timeToRunPlus = timeToRunPlus-0.5
        end
        hiloRandomizer()
        seedRandomizer()
        randomChane()
        nextbet = sleepbet
        check=true
        timeToRun = math.floor(timeToRun/2*(math.random(2, 4)+math.floor(timeToRunPlus+0.5))+0.5)
    else
        if(e == 0 and check==true)then
            nextbet = basebet
            check = false
        elseif(e<0)then
            nextbet = nextbet*multiply
            sleep(secondSleep)
        end
    end
    if(balance >= takeprofit)then
        resetseed()
        takeprofit = balance*multiplyProfit
        basebet   = balance/divideBalance
    end
    if(balance >= targetToStop)then
        stop()
        print("GET RICK!");
    end
    print("==========================");
    print("[To Bet]: ["..string.format("%d",e).."]")
    print("[Base Bet]: ["..string.format("%.8f",basebet).."]")
    print("[Proifit]: ["..string.format("%.4f",profit/(oldBalace)*100).."]%")
    print("==========================");
end