--Warming up
math.random(); math.random(); math.random()
price             = 0.07679
stopLossUSD       = 5
stopLoss          = 1000
oldBalance        = 1000
sig = 65
takeProfitPercent = 1
takeProfit        = oldBalance*takeProfitPercent
maxProfit         = oldBalance
listChance        = {24.75, 19.8, 16.5, 13.75, 12.37, 11, 9.9}
listPayout        = {4, 5, 6, 7, 8, 9, 10}
listMultiply      = {1.35, 1.26, 1.21, 1.17, 1.15, 1.13, 1.12}
listMultiplyLost  = {10.67, 9.75, 9.6, 9, 9, 8.625, 9}
listDivideBalance = {3700, 3800, 4430, 4390, 5170, 5290, 6660}
divebalace        = 5480
mainbasebet       = sig/divebalace
basebet           = mainbasebet
nextbet           = basebet
multiply          = 1.12
multiplyLoss      = 8
payout            = 10
chance            = 9.90
winStreak         = 0
maxWinStreak      = 0
lossStreak        = 0
maxStreakRS       = 0
seedRandomizerX   = 0
hiloRandomizerX   = 0
highProfit        = 0
highBalance       = oldBalance
lowProfit         = 0
timeStart         = os.clock()
timeRun           = 0
wager             = 0
CHANCE_RANDOMIZER = 0
sleepNext         = false
lastTime          = 0
time              = 1800
timeMin           = 600
timeMax           = 1800
joker             = 0
countJoke         = 0
function gendMaxStreakRS()
    maxStreakRS  = math.random(1,3)
    if(maxStreakRS <= 1)then
        maxStreakRS = 0
    elseif(maxStreakRS <= 2)then
        maxStreakRS = payout
    elseif(maxStreakRS <= 3)then
        maxStreakRS = payout * 2
    end
end

function seedRandomizer()
    seedRandomizerX = math.random(1, 3)
    if(seedRandomizerX == 2)then
        resetseed()
    end
end

function hiloRandomizer()
    hiloRandomizerX = math.random(1, 3)
    if(hiloRandomizerX == 2)then
        hiloRandomizerX = math.random(0, 1)
        if (hiloRandomizerX == 1) then
            bethigh = true
        else
            bethigh = false
        end
    end
end

function randomChane()
    CHANCE_RANDOMIZER = math.random(1, 4)
    if(CHANCE_RANDOMIZER == 1)then
        CHANCE_RANDOMIZER = math.random(1, #listChance)
        chance            = listChance[CHANCE_RANDOMIZER]
        chanceBack        = chance
        payout            = listPayout[CHANCE_RANDOMIZER]
        multiply          = listMultiply[CHANCE_RANDOMIZER]
        divebalace        = listDivideBalance[CHANCE_RANDOMIZER]
        multiply          = listMultiply[CHANCE_RANDOMIZER]
        multiplyLoss      = listMultiplyLost[CHANCE_RANDOMIZER]
    end
end

function jokeDealer()
    joker = math.random(1, 50)
    if(joker == 25)then
        nextbet = 0.00014/price
        countJoke = countJoke + 1
        print("SEND JOKES...")
    end
end

function randomSleepTime()
    time = math.random(1, 6)
    if(time <= 1)then
        time = math.random(300, 600)
    elseif(time <= 3)then
        time = math.random(600, 1200)
    elseif(time <= 6)then
        time = math.random(1200, 1800)
    end
end

function sleepToNextBet()
    if(os.clock() - lastTime <= time)then
        typeBet = math.random(1, 2)
        newtime = time - (os.clock() - lastTime)
        print("[Wait]\t\t[" ..string.format("%.2d:%.2d", math.floor(newtime/60), math.floor(newtime%60)).. "] for next session...")
        nextbet = 0
        jokeDealer()
    else
        print("Back to bet...")
        hiloRandomizer()
        seedRandomizer()
        randomChane()
        gendMaxStreakRS()
        highBalance = oldBalance + profit
        mainbasebet = sig/divebalace
        basebet     = mainbasebet
        nextbet     = mainbasebet
        lossStreak  = 0
        winStreak   = 0
        sleepNext   = false
        if(maxStreakRS == 0)then
            nextbet = basebet
        else
            nextbet = 0
        end
    end
end

hiloRandomizer()
seedRandomizer()

function dobet()
    wager = wager + nextbet
    if (win) then
        winStreak = winStreak + 1
        if(lossStreak >= maxStreakRS and lossStreak < maxStreakRS + payout * 2)then
            maxWinStreak = maxWinStreak + 1
            hiloRandomizer()
            seedRandomizer()
            randomChane()
            gendMaxStreakRS()
            mainbasebet  = sig/divebalace
            basebet      = mainbasebet
            nextbet = mainbasebet
        else
            winStreak = 0
            if(lossStreak >= maxStreakRS + payout * 2)then
                gendMaxStreakRS()
                basebet = basebet * multiplyLoss
            end
            maxWinStreak = 0
        end
        if(maxStreakRS == 0)then
            nextbet = basebet
        else
            nextbet = 0
        end
        lossStreak = 0
    else
        winStreak = 0
        lossStreak = lossStreak + 1
        if(lossStreak >= maxStreakRS and lossStreak < maxStreakRS + payout* 2)then
            if(nextbet == 0) then
                nextbet = basebet
            end
            nextbet = nextbet*multiply
        else
            nextbet = 0
        end
    end
    if(profit >= highProfit)then
        highProfit = profit
        highBalance = oldBalance + highProfit
    elseif(profit < lowProfit)then
        lowProfit = profit
    end
    timeRun = math.floor(os.clock() - timeStart)
    print("\n\n\n\n\n")
    print("<==========================================>")
    
    if(sleepNext)then
        sleepToNextBet()
        print("[Next Bet]:\t["..string.format("%.8f",nextbet*price).."]")
        print("[Chance]:\t\t["..string.format("%.2f",chance).."]")
        print("[Payout]:\t\t["..tostring(payout).."]")
        print("[Streak]:\t\t["..tostring(maxStreakRS).."]")
    else
        print("[Next Bet]:\t["..string.format("%.8f",nextbet*price).."]")
        print("[Chance]:\t\t["..string.format("%.2f",chance).."]")
        print("[Payout]:\t\t["..tostring(payout).."]")
        print("[Streak]:\t\t["..tostring(maxStreakRS).."]")
        print("[Next Bet]:\t["..string.format("%.8f",nextbet*price).."]")
        print("[Chance]:\t\t["..string.format("%.2f",chance).."]")
        print("[Payout]:\t\t["..tostring(payout).."]")
        print("[Streak]:\t\t["..tostring(maxStreakRS).."]")
        print("[Profit]:\t\t["..string.format("%.8f",profit*price).."]  ["..string.format("%.4f",profit/(oldBalance)*100).."]%")
        print("[Base Bet]:\t["..string.format("%.8f",basebet*price).."]  ["..string.format("%.4f",basebet/(oldBalance)*100).."]%")
        print("[High PF]:\t\t["..string.format("%.8f",highProfit*price).."]  ["..string.format("%.4f",highProfit/(oldBalance)*100).."]%")
        print("[Low PF]:\t\t["..string.format("%.8f",lowProfit*price).."]  ["..string.format("%.4f",lowProfit/(oldBalance)*100).."]%")
        print("[Sleep PF]:\t["..string.format("%.8f",takeProfit*price).."]  ["..string.format("%.4f",takeProfit/(oldBalance)*100).."]%")
        if(timeRun > 0)then
            print("<==========================================>")
            print("[Wager]:\t\t["..string.format("%.8f",wager*price).."]  ["..string.format("%.4f",wager/(oldBalance)*100).."]%")
            print("[Per hour]:\t["..string.format("%.8f",wager*price/timeRun*3600).."]  ["..string.format("%.4f",wager/timeRun*3600/oldBalance*100).."]%")
            print("[Per day]:\t\t["..string.format("%.8f",wager*price/timeRun*86400).."]  ["..string.format("%.4f",wager/timeRun*86400/oldBalance*100).."]%")
        end
    end
    print("<==========================================>")
    print("[Jokes ]:\t\t["..string.format("%d",countJoke).."]")
    print("<==========================================>")  
    if(profit >= takeProfit) then
        takeProfit = profit + (oldBalance + profit)*takeProfitPercent
        sleepNext = true
        lastTime = os.clock()
        randomSleepTime()
        nextbet = 0
        highBalance = 0
    elseif(profit-nextbet <= stopLoss*(-1) or profit >= maxProfit)then
        stop()
    end
end