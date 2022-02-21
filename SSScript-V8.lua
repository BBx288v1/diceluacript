--Warming up
math.random(); math.random(); math.random()
price           = 0.08142
stopLossUSD     = 0.17
stopLoss        = balance --stopLossUSD/price
oldBalance      = stopLoss
takeProfit      = oldBalance*0.1
divebalace      = 1160
mainbasebet     = stopLoss/divebalace
basebet         = mainbasebet
nextbet         = basebet
betBack         = basebet
chance          = 49.5
multiplier      = 2
winStreak       = 0
lossStreak      = 0
maxStreakRS     = math.random(2,4)
seedRandomizerX = 0
hiloRandomizerX = 0
highProfit      = 0
highBalance     = oldBalance
lowProfit       = 0
timeStart       = os.clock()
timeRun         = 0
wager           = 0
lastMul         = false
mainStep        = 0.02
step            = mainStep
stage           = 1
resetseed()
function gendMaxStreakRS()
    maxStreakRS  = math.random(1,8)
    if(maxStreakRS <= 3)then
        maxStreakRS = 2
    elseif(maxStreakRS <= 6)then
        maxStreakRS = 3
    elseif(maxStreakRS <= 8)then
        maxStreakRS = 4
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

function randomChangeSeed()
    nextChange = math.random(bets+3,bets+300)
end

hiloRandomizer()
seedRandomizer()

function stageOne()
    if (win) then
        winStreak = winStreak + 1
        if(winStreak < maxStreakRS)then
            nextbet = nextbet * multiplier
        else
            winStreak = 0
            hiloRandomizer()
            seedRandomizer()
            gendMaxStreakRS()
            betBack = basebet
            nextbet = betBack
        end
    else
        winStreak = 0
        betBack = betBack*1.03
        nextbet = betBack
    end
end

function stageTwo()
    if (win) then
        if(lossStreak >= 5)then
            lossStreak = 0
            hiloRandomizer()
            seedRandomizer()
        end
        nextbet = basebet
    else
        lossStreak = lossStreak + 1
        nextbet = nextbet * multiplier
    end
end

function dobet()
    wager = wager + nextbet
    if(stage == 1)then
        stageOne()
    else
        stageTwo()
    end
    if(profit >= highProfit)then
        highProfit  = profit
        highBalance = oldBalance + highProfit
        mainbasebet = highBalance/divebalace
        basebet     = mainbasebet
        betBack     = basebet
        if(step > mainStep)then
            step = mainStep
            nextbet = betBack
        end
        lastMul     = false
        stage       = 1
    elseif(profit < lowProfit)then
        lowProfit = profit
    end
    if highBalance - oldBalance - profit >= highBalance * step and lastMul == false then
        step = step * 5
        basebet = basebet * 2
        if(step >= 0.5)then
            lastMul = true
            stage = 2
            betBack = basebet
        end
        
    end
    timeRun = math.floor(os.clock() - timeStart)
    print("\n\n\n\n\n")
    print("<==========================================>")
    print("[Stage]:\t\t["..tostring(stage).."]")
    print("[Next Bet]:\t["..string.format("%.8f",nextbet*price).."]")
    print("[Chance]:\t\t["..string.format("%.2f",chance).."]")
    print("[Streak]:\t\t["..tostring(maxStreakRS).."]")
    print("[Profit]:\t\t["..string.format("%.8f",profit*price).."]  ["..string.format("%.4f",profit/(oldBalance)*100).."]%")
    print("[Base Bet]:\t["..string.format("%.8f",basebet*price).."]  ["..string.format("%.4f",basebet/(oldBalance)*100).."]%")
    print("[High PF]:\t\t["..string.format("%.8f",highProfit*price).."]  ["..string.format("%.4f",highProfit/(oldBalance)*100).."]%")
    print("[Low PF]:\t\t["..string.format("%.8f",lowProfit*price).."]  ["..string.format("%.4f",lowProfit/(oldBalance)*100).."]%")
    if(timeRun > 0)then
        print("<==========================================>")
        print("[Wager]:\t\t["..string.format("%.8f",wager*price).."]  ["..string.format("%.4f",wager/(oldBalance)*100).."]%")
        print("[Per hour]:\t["..string.format("%.8f",wager*price/timeRun*3600).."]  ["..string.format("%.4f",wager/timeRun*3600/oldBalance*100).."]%")
        print("[Per day]:\t\t["..string.format("%.8f",wager*price/timeRun*86400).."]  ["..string.format("%.4f",wager/timeRun*86400/oldBalance*100).."]%")
    end
    print("<==========================================>")
    if(profit-nextbet <= stopLoss*(-1) or profit >= takeProfit)then
        stop()
    end
end