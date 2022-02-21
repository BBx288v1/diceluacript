diveWager = 50
chanceWager = 98;chanceBack = 66;chance = chanceWager
wagerBet = balance/diveWager;bigBet = wagerBet*10;nextbet = wagerBet
wager = 0
timeStart = os.clock()
seedRandomizerX = 0;hiloRandomizerX = 0
countLowChance = 0;startCount = false;timeToStartCount = math.random(5,7);
oldBalance = balance
math.randomseed(os.time())
math.random(); math.random(); math.random()
resetseed()

function seedRandomizer()
    seedRandomizerX = math.random(0, 2)
    while (seedRandomizerX >= 1) do
        resetseed()
        seedRandomizerX = seedRandomizerX - 1
    end
end

function hiloRandomizer()
    hiloRandomizerX = math.random(0, 1)
    if (hiloRandomizerX == 1) then
        bethigh = true
    else
        bethigh = false
    end
end

function startCount()
    timeToStartCount = math.random(5,7)
end

function dobet()
    wager = wager + nextbet
    if win then
        chance = chanceWager
        nextbet = wagerBet
    else
        chance = chanceWager
        nextbet = wagerBet
        if(nextbet > wagerBet)then
            seedRandomizer()
            hiloRandomizer()
        end
    end
    if((lastBet.roll < 49.5 and bethigh==false)or(lastBet.roll > 50.5 and bethigh==true))then
        countLowChance = countLowChance + 1
        if(countLowChance >= timeToStartCount)then
            countLowChance = 0
            nextbet = bigBet
            chance = chanceBack
            startCount()
        end
    else
        countLowChance = 0
    end
    timeRun = math.floor(os.clock() - timeStart)
    if (timeRun > 0) then
        print("<==========Wager view======================>")
        print("[Time]:    ["..string.format("%.2d:%.2d", math.floor(timeRun/60), math.floor(timeRun%60)).."]")
        print("[To wait]: ["..string.format("%d", timeToStartCount-countLowChance).."]")
        print("[Wager]:   [" .. string.format("%.8f", wager) .. "]  [" .. string.format("%.4f", wager / (oldBalance) * 100) .. "]%")
        print("[Per hour]:[" .. string.format("%.8f", wager / timeRun * 3600) .. "]  [" .. string.format("%.4f", wager / timeRun * 3600 / oldBalance * 100) .. "]%")
        print("[Per day]: [" .. string.format("%.8f", wager / timeRun * 86400) .. "]  [" .. string.format("%.4f", wager / timeRun * 86400 / oldBalance * 100) .. "]%")
    end
end
