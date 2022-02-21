--Warming up
math.randomseed(os.time())
math.random(); math.random(); math.random()
stopLoss     = 0.044
oldBalance   = stopLoss
baseChane    = 98
chanceChange = 66
basebet      = 0.00088
nextbet      = basebet
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
    toWait = math.random(1, 100)
end

function dobet()
    toWait = toWait - 1
    wager = wager + nextbet
    if win then
        nextbet = basebet
        chance = baseChane
        if(toWait <= -50)then
            getToWait()
        end
    else
        if(nextbet >= basebet) then
            getToWait()
            seedRandomizer()
            hiloRandomizer()
        end
    end
    if(profit > highProfit)then
        highProfit = profit
    elseif(profit < lowProfit)then
        lowProfit = profit
    end
    if(toWait == 0)then
        nextbet = basebet*50
    end
    timeRun = math.floor(os.clock() - timeStart)
    print("\n\n\n\n\n")
    print("<==========================================>")
    print("[Next Bet]:\t["..string.format("%.8f",nextbet).."]")
    print("[To Wait]:\t["..tostring(toWait).."]")
    print("[High PF]:\t["..string.format("%.8f",highProfit).."]  ["..string.format("%.4f",highProfit/(oldBalance)*100).."]%")
    print("[Low PF]:\t\t["..string.format("%.8f",lowProfit).."]  ["..string.format("%.4f",lowProfit/(oldBalance)*100).."]%")
    if(timeRun > 0)then
        print("<==========Wager view======================>")
        if(profit < 0)then
            print("[CurWager]:\t["..string.format("%.8f",profit).."]  ["..string.format("%.4f",wager/(profit*(-1))*100).."]%")
        end
        print("[Wager]:\t\t["..string.format("%.8f",wager).."]  ["..string.format("%.4f",wager/(oldBalance)*100).."]%")
        print("[Per hour]:\t["..string.format("%.8f",wager/timeRun*3600).."]  ["..string.format("%.4f",wager/timeRun*3600/oldBalance*100).."]%")
        print("[Per day]:\t["..string.format("%.8f",wager/timeRun*86400).."]  ["..string.format("%.4f",wager/timeRun*86400/oldBalance*100).."]%")
    end
    print("<==========================================>")
    if((profit - nextbet< stopLoss*(-1)*1.3 and nextbet ~= basebet) or (profit < stopLoss*(-1) and nextbet == basebet))then
        stop()
    end
end