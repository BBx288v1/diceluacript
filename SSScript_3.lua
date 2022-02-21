--Random initialize
math.randomseed(os.time())
--Warming up
math.random(); math.random(); math.random()
--List setting chance
listTarget = {1.02;1.03;1.04;1.05};listChanceTarget = {97.05;96.11;95.19;94.28}
--Default value
highProfit = 0;lowProfit = 0
oldBalance = balance;maxSleep = balance/200000;sleepBet = math.random(0.00000001*100000000,maxSleep*100000000)/100000000
chance = 49.5;nextbet = sleepBet
wager = 0
checkBet3 = false
--
chanceBase = 49.5
bet1 = 0.00052
betBack1 = bet1
countStreak1 = 0
chance2 = 66
bet2 = 0.021
loseStreakS = 0
--Sleep setting
timeToRun = math.floor(99/chance*math.random(1, 3)+0.5)
time = 1800;maintime = os.clock();timeStart = os.clock();timeRun = 0;midTime = 0;backTime=0;checkWait=false;toBig=true
--Type bet setting
typeBet = math.random(1, 2)
if(typeBet ==1)then
    timeToRun = math.floor(99/chance*math.random(1, 3)+0.5)
elseif(typeBet == 2)then
    timeToRun = math.floor(99/chance*math.random(2, 4)+0.5)+1
end
--Bet setting
divBalanceToBig = 16
bigBig = oldBalance*0.9998/divBalanceToBig
mainBigBig = bigBig
multiplierBig = 5
multiplyProfit = 0.1
resMain = balance + bigBig
takeProfitPerTime = balance + bigBig*multiplyProfit;raseProfitPerTime = takeProfitPerTime - balance
--Joke value
joker = math.random(1, 200)
divedeJoke = math.random(200, 300)
joke = bigBig/divedeJoke;countJoke = 0
--Stop take profit
takeProfit = balance*2
resetseed()


function dobet()
    wager = wager + nextbet
    function jokeDealer()
        joker = math.random(1, 200)
        if(joker == 99)then
            divedeJoke = math.random(200, 300)
            joke = mainBigBig/divedeJoke
            nextbet = joke
            countJoke = countJoke + 1
            print("SEND JOKES...")
        end
    end

    function seedRandomizer()
        seedRandomizer = math.random(0, 1)
        if(seedRandomizer == 1)then
            seedRandomizer = math.random(1, 2)
        end
        while (seedRandomizer >= 1) do 
            resetseed()
            seedRandomizer = seedRandomizer - 1
        end
    end

    function hiloRandomizer()
        hiloRandomizer = math.random(0, 1)
        if (hiloRandomizer == 1) then 
            bethigh = true
        else 
            bethigh = false
        end
    end

    function sleepToNext()
        typeBet = math.random(1, 2)
        s = 0
        for i=1,10000 do s = s + i end
        if(os.clock() - x <= time )then
            newtime = time - (os.clock() - x)
            sleepBet = math.random(0.00000001*100000000,maxSleep*100000000)/100000000
            nextbet = sleepBet
            jokeDealer()
            print("[Wait]     [" ..string.format("%.2d:%.2d", math.floor(newtime/60), math.floor(newtime%60)).. "] for next session...")
            toBig = false
        else
            toBig = true
            maintime = os.clock()
            takeProfitPerTime = balance + bigBig*multiplyProfit
            raseProfitPerTime = takeProfitPerTime - balance
            backTime = midTime
            typeBet = math.random(1, 3)
            if(typeBet == 3)then
                chance = chanceBase
                checkBet3  = true
                takeProfitPerTime = balance + bet1*0.9
                raseProfitPerTime = takeProfitPerTime - balance
            end
            hiloRandomizer()
            seedRandomizer()
        end
    end

    function sleepToNextBet3()
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
            backTime = midTime
            chance = chanceBase
        end
    end
    
    function randomChane()
        CHANCE_RANDOMIZER = math.random(3300,9800)
        chance = CHANCE_RANDOMIZER/100
        sleepBet = math.random(0.00000001*100000000,maxSleep*100000000)/100000000
        nextbet = sleepBet
        payout = 99/chance
        timeToRun = math.floor(payout*math.random(2, 4)+0.5)
        if(typeBet ==1)then
            timeToRun = math.floor(99/chance*math.random(1, 3)+0.5)
        elseif(typeBet == 2)then
            timeToRun = math.floor(99/chance*math.random(2, 4)+0.5)+1
        end
    end
    function randomChaneReal()
        CHANCE_RANDOMIZER = math.random(1, #listChanceTarget)
        chance = listChanceTarget[CHANCE_RANDOMIZER]
        nextbet = bigBig
        if(bigBig > balance)then
            nextbet = balance
        end
    end
    function randomTime()
        TIME_RANDOMIZER = math.random(1, 6)
        if(TIME_RANDOMIZER == 1 or TIME_RANDOMIZER == 2 or TIME_RANDOMIZER == 3)then
            time = math.random(60, 600)
        elseif(TIME_RANDOMIZER == 4 or TIME_RANDOMIZER == 5)then
            time = math.random(600, 900)
        elseif(TIME_RANDOMIZER == 6)then
            time = math.random(900, 1800)
        end
    end
    function dobet1()
        e = currentstreak - timeToRun
        if win then
            if(nextbet ~= sleepBet)then
                randomChane()
                seedRandomizer()
            elseif(toBig == true)then
                if(e == 0 and nextbet == sleepBet)then
                    randomChaneReal()
                else
                    jokeDealer()
                end
            end
        else
            if(toBig == true)then
                if(nextbet >= mainBigBig*0.9)then
                    bigBig = bigBig*multiplierBig
                    resMain = oldBalance+highProfit
                    takeProfitPerTime = balance + bigBig*multiplyProfit
                    raseProfitPerTime = takeProfitPerTime - balance
                    randomTime()
                    x = os.clock()
                    sleepToNext()
                    randomChane()
                else
                    randomChane()
                end
            else
                randomChane()
            end
            
        end
    end
    function dobet2()
        e = currentstreak + timeToRun
        if win then
            if(nextbet ~= sleepBet)then
                seedRandomizer()
            end
            randomChane()   
        else
            if(toBig == true)then
                if(nextbet >= mainBigBig*0.9)then
                    bigBig = bigBig*multiplierBig
                    resMain = oldBalance+highProfit
                    takeProfitPerTime = balance + bigBig*multiplyProfit
                    raseProfitPerTime = takeProfitPerTime - balance
                    randomTime()
                    x = os.clock()
                    sleepToNext()
                    randomChane()
                elseif(e == 0)then
                    randomChaneReal()
                else
                    jokeDealer()
                end
            end
        end
    end
    function dobet3()
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
                        time = math.random(60,120)
                        sleepToNextBet3()
                    end
                    countStreak1 = 0
                end
                sleepBet = math.random(0.00000001*100000000,maxSleep*100000000)/100000000
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
                        sleepBet = math.random(0.00000001*100000000,maxSleep*100000000)/100000000
                        nextbet = sleepBet
                        loseStreakS = 0
                        x = os.clock()
                        time = math.random(60,120)
                        sleepToNextBet3()
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
    end
    if(typeBet == 1)then
        dobet1()
    elseif(typeBet == 2)then
        dobet2()
    else
        dobet3()
    end
    if(profit > highProfit)then
        highProfit = profit
    elseif(profit < lowProfit)then
        lowProfit = profit
    end
    print("\n\n\n\n\n")
    if(toBig == true)then
        print("<==========Bet view========================>")
        midTime = math.floor(os.clock() - maintime)+backTime
        print("[Time]:    ["..string.format("%.2d:%.2d", math.floor(midTime/60), math.floor(midTime%60)).."]")
        print("[Type]:    ["..string.format("%d",typeBet).."]")  
        if(typeBet == 1 or typeBet == 2)then
            print("[Tobet]:   ["..string.format("%d",e).."]")  
            print("[Big Bet]: ["..string.format("%.8f",bigBig).."]  ["..string.format("%.4f",bigBig/oldBalance*100).."]%")
        else
            print("[Next Bet]:["..string.format("%.8f",nextbet).."]  ["..string.format("%.4f",nextbet/(balance)*100).."]%")
        end
        print("[Chance]:  ["..string.format("%.2f",chance).."]")  
        print("[Payout]:  ["..string.format("%.2f",99/chance).."]")
    else
        sleepToNext()
    end
    print("<==========Profit view=====================>")
    print("[Profit]:  ["..string.format("%.8f",profit).."]  ["..string.format("%.4f",profit/(oldBalance)*100).."]%")
    if(typeBet == 1 or typeBet == 2)then
        print("[Session]: ["..string.format("%.8f",raseProfitPerTime).."]  ["..string.format("%.4f",(raseProfitPerTime)/oldBalance*100).."]%")
    end
    print("[High PF]: ["..string.format("%.8f",highProfit).."]  ["..string.format("%.4f",highProfit/(oldBalance)*100).."]%")
    print("[Low PF]:  ["..string.format("%.8f",lowProfit).."]  ["..string.format("%.4f",lowProfit/(oldBalance)*100).."]%")
    print("[Big Bet]: ["..string.format("%.8f",bigBig).."]  ["..string.format("%.4f",bigBig/oldBalance*100).."]%")
    print("[Jokes]:   ["..string.format("%d",countJoke).."]")  
    timeRun = math.floor(os.clock() - timeStart)
    if(timeRun > 0)then
        print("<==========Wager view======================>")
        print("[Wager]:   ["..string.format("%.8f",wager).."]  ["..string.format("%.4f",wager/(oldBalance)*100).."]%")
        print("[Per hour]:["..string.format("%.8f",wager/timeRun*3600).."]  ["..string.format("%.4f",wager/timeRun*3600/oldBalance*100).."]%")
        print("[Per day]: ["..string.format("%.8f",wager/timeRun*86400).."]  ["..string.format("%.4f",wager/timeRun*86400/oldBalance*100).."]%")
    end
    if(checkWait == true)then
        checkWait = false
        x = os.clock()
        sleepToNext()
    end
    if(balance >= takeProfitPerTime and toBig == true)then
        checkWait = true
        randomTime()
        randomChane()
        if(bigBig*0.9 <= mainBigBig or balance >= resMain*0.999)then
            bigBig = balance*0.9998/divBalanceToBig
            mainBigBig = bigBig
        end
    end
    if(balance >= takeProfit)then
        print("GET RICK...")
        stop()
    end
end