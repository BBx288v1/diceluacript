--Warming up
math.random(); math.random(); math.random()
price           = 0.07679
stopLossUSD     = 10
stopLoss        = stopLossUSD/price
oldBalance      = stopLoss
takeProfit      = oldBalance*10
divebalace      = 5256
mainbasebet     = stopLoss/divebalace
basebet         = mainbasebet
nextbet         = basebet
chance          = 9.90
winStreak       = 0
maxWinStreak    = 0
lossStreak      = 0
maxStreakRS     = 0
seedRandomizerX = 0
hiloRandomizerX = 0
highProfit      = 0
highBalance     = oldBalance
lowProfit       = 0
timeStart       = os.clock()
timeRun         = 0
wager           = 0
function gendMaxStreakRS()
    maxStreakRS  = math.random(1,3)
    if(maxStreakRS <= 1)then
        maxStreakRS = 0
    elseif(maxStreakRS <= 2)then
        maxStreakRS = 10
    elseif(maxStreakRS <= 3)then
        maxStreakRS = 20
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

function dobet()
    wager = wager + nextbet
    if (win) then
        winStreak = winStreak + 1
        if(lossStreak >= maxStreakRS and lossStreak < maxStreakRS + 20)then
            nextbet = nextbet * 9 / 72.1 + basebet
            maxWinStreak = maxWinStreak + 1
            basebet = mainbasebet
            if(maxWinStreak >= 8) then
                nextbet = basebet
                maxWinStreak = 0
            end
            hiloRandomizer()
            seedRandomizer()
            gendMaxStreakRS()
        else
            winStreak = 0
            if(lossStreak >= maxStreakRS + 20)then
                gendMaxStreakRS()
                basebet = basebet * 8
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
        if(lossStreak >= maxStreakRS and lossStreak < maxStreakRS + 20)then
            if(nextbet == 0) then
                nextbet = basebet
            end
            nextbet = nextbet*1.12
        else
            nextbet = 0
        end
    end
    if(profit >= highProfit)then
        highProfit  = profit
        mainbasebet = stopLoss/divebalace
    elseif(profit < lowProfit)then
        lowProfit = profit
    end
    timeRun = math.floor(os.clock() - timeStart)
    print("\n\n\n\n\n")
    print("<==========================================>")
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