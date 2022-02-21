
chanceBase = 49.5
chance = chanceBase
bet1 = 0.00052
betBack1 = bet1
countStreak1 = 0
chance2 = 66
bet2 = 0.021
loseStreakS = 0
sleepBet = 0.00000001
nextbet = sleepBet
time = 1800
timeX = 60
oldBalace = balance
targetProfit = 0.0052
takeProfitPerTime = balance+targetProfit
maintime = os.clock();midTime = 0;backTime=0;checkWait=false;toBig=true
checkNextSessions = false

function dobet()
    function sleepToNextSessions()
        s = 0
        for i=1,10000 do s = s + i end
        if(os.clock() - x <= time )then
            newtime = time - (os.clock() - x)
            print("Wait " ..string.format("%.2d:%.2d", math.floor(newtime/60), math.floor(newtime%60)).. " for next session...")
            nextbet = sleepBet
            toBig = false
        else
            print("Back to bet...")
            toBig = true
            maintime = os.clock()
            takeProfitPerTime = balance+targetProfit
            backTime = backTime + midTime
            chance = chanceBase
            checkNextSessions = false
        end
    end
    function sleepToNext()
        s = 0
        for i=1,100000 do s = s + i end
        if(os.clock() - x <= timeX )then
            newtime = timeX - (os.clock() - x)
            print("Wait " ..string.format("%.2d:%.2d", math.floor(newtime/60), math.floor(newtime%60)).. " for next session...")
            nextbet = sleepBet
            toBig = false
        else
            print("Back to bet...")
            toBig = true
            maintime = os.clock()
            backTime = backTime + midTime
            chance = chanceBase
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
        CHANCE_RANDOMIZER = math.random(11,980)
        chance = CHANCE_RANDOMIZER/10
        nextbet = sleepBet
    end

    function hiloRandomizer()
        hiloRandomizer = math.random(0, 1); 
        if (hiloRandomizer == 1) then 
            bethigh = true
        else 
            bethigh = false
        end
    end

    if win then
        if(toBig == true)then
            if(nextbet > sleepBet)then
                betBack1 = bet1
                chance = chanceBase
                if(nextbet >= bet2)then
                    seedRandomizer()
                end
                hiloRandomizer()
                if(betBack1 < bet2)then
                    x = os.clock()
                    sleepToNext()
                end
                countStreak1 = 0
            end
            nextbet = sleepBet
            loseStreakS = 0
        else
            randomChane()
        end
    else
        if(toBig == true)then
            loseStreakS = loseStreakS + 1
            if(nextbet > sleepBet and countStreak1 < 3)then
                countStreak1 = countStreak1 + 1
                if(countStreak1 < 3)then
                    betBack1 = betBack1*4
                    nextbet = sleepBet
                    x = os.clock()
                    sleepToNext()
                    loseStreakS = 0
                end
            end
            if(loseStreakS == 4)then
                nextbet = betBack1
                if(loseStreakS + 1 < 3)then
                    loseStreakS = 0
                end
            elseif(loseStreakS == 5)then
                betBack1 = bet2
                nextbet = betBack1
                chance = chance2
            elseif(loseStreakS > 5 and loseStreakS < 8)then
                betBack1 = betBack1*4
                nextbet = betBack1
            elseif(loseStreakS >= 8)then
                stop()
            end
        end
    end
    if(toBig == true)then
        midTime = math.floor(os.clock() - maintime)+backTime
        print("[Time]:     ["..string.format("%.2d:%.2d", math.floor(midTime/60), math.floor(midTime%60)).."]") 
        print("[Next Bet]: ["..string.format("%.8f",nextbet).."]  ["..string.format("%.4f",nextbet/(balance)*100).."]%")
        print("[Chance]:   ["..string.format("%.2f",chance).."]")  
        print("[Payout]:   ["..string.format("%.2f",99/chance).."]")
        print("[Profit]:   ["..string.format("%.8f",profit).."]  ["..string.format("%.4f",profit/oldBalace*100).."]%")
        print("==========================")
    else
        if(checkNextSessions ~= true)then
            sleepToNext()
        else
            sleepToNextSessions()
        end
    end
    if(checkWait == true)then
        checkWait = false
        checkNextSessions = true
        x = os.clock()
        sleepToNextSessions()
    end
    if(balance >= takeProfitPerTime and toBig == true)then
        checkWait = true
    end
end