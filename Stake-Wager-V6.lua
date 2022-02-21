--Warming up
math.random(); math.random(); math.random()
price = 0.082
stopLossPrice= 10
stopLoss     = stopLossPrice/price
oldBalance   = stopLoss
baseChance    = 98
chanceChange = 98
multi = 1
basebet      = oldBalance/20
nextbet      = basebet
betBack = basebet
wager        = 0
highProfit   = 0
lowProfit    = 0
timeStart    = os.clock()
timeRun      = 0
toWait       = 0
resetseed()

function seedRandomizer()
    seedRandomizerX = math.random(0, 2)
    if(seedRandomizerX ~= 2)then
        seedRandomizerX = math.random(0, 2)
        while (seedRandomizerX >= 1) do
            resetseed()
            seedRandomizerX = seedRandomizerX - 1
        end
    end
end

function hiloRandomizer()
    hiloRandomizerX = math.random(0, 2)
    if(hiloRandomizerX ~= 2)then
        hiloRandomizerX = math.random(0, 1)
        if (hiloRandomizerX == 1) then
            bethigh = true
        else
            bethigh = false
        end
    end
end

function getToWait()
    toWait = math.random(1, 200)
end
getToWait()
function dobet()
    toWait = toWait - 1
    wager = wager + nextbet
    if win then
        nextbet = basebet
        chance = baseChance
    else
        nextbet = basebet
        chance = baseChance
    end
    if(profit > highProfit)then
        highProfit = profit
    elseif(profit < lowProfit)then
        lowProfit = profit
    end
    if(bets % 50 == 0) then
        seedRandomizer()
        hiloRandomizer()
    end
    if(toWait == 0)then
        getToWait()
        seedRandomizer()
        hiloRandomizer()
        nextbet = basebet * multi
        chance = chanceChange
    end
    timeRun = math.floor(os.clock() - timeStart)
    print("\n\n\n\n\n")
    print("<==========================================>")
    print("[Next Bet]:\t\t["..string.format("%.8f",nextbet*price).."]")
    print("[To Wait]:\t\t["..tostring(toWait).."]")
    print("[High PF]:\t\t["..string.format("%.8f",highProfit*price).."]  ["..string.format("%.4f",highProfit/(oldBalance)*100).."]%")
    print("[Low PF]:\t\t["..string.format("%.8f",lowProfit*price).."]  ["..string.format("%.4f",lowProfit/(oldBalance)*100).."]%")
    if(timeRun > 0)then
        print("<==========Wager view======================>")
        if(profit < 0)then
            print("[CurWager]:\t\t["..string.format("%.8f",profit*price).."]  ["..string.format("%.4f",wager/(profit*(-1))*100).."]%")
        end
        print("[Wager]:\t\t["..string.format("%.8f",wager*price).."]  ["..string.format("%.4f",wager/(oldBalance)*100).."]%")
        print("[Per hour]:\t\t["..string.format("%.8f",wager/timeRun*3600).."]  ["..string.format("%.4f",wager/timeRun*3600/oldBalance*100).."]%")
        print("[Per day]:\t\t["..string.format("%.8f",wager/timeRun*86400).."]  ["..string.format("%.4f",wager/timeRun*86400/oldBalance*100).."]%")
    end
    print("<==========================================>")
    if((profit - nextbet< stopLoss*(-1)*1.3 and nextbet ~= basebet) or (profit < stopLoss*(-1) and nextbet == basebet))then
        stop()
    end
end