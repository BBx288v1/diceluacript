--Can change
diveWager = 27
--Default value
chanceWager = 98;chanceBack = 66;wagerBet = balance/diveWager;nextbet = wagerBet;wager = 0;oldBalance = balance;chance=chanceWager
seedRandomizerX = 0;hiloRandomizerX = 0
--Time settings
time = 0;newtime = 0;x = 0;minutes = 0;seconds = 0;timeStart = os.clock()
resetseed()
--Profit settings
highProfit=0;lowProfit=0;
takeProfit = balance*1.2
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
if(profit > highProfit)then
    highProfit = profit
elseif(profit < lowProfit)then
    lowProfit = profit
end
function sleepToNextBet()
    if(os.clock() - x <= time)then
        newtime = time - (os.clock() - x)
        print("[Bet in]     [" ..string.format("%.2d:%.2d", math.floor(newtime/60), math.floor(newtime%60)).. "] left...")
    else
        print("Go to sleep...")
        time = math.random(10,15)
        x = os.clock()
        while(os.clock() - x <= time)do
            s = 0
            for i=1,100000 do s = s + i end
            newtime = time - (os.clock() - x)
            if(math.floor(newtime/60) ~= minutes or math.floor(newtime%60) ~= seconds) then
                minutes = math.floor(newtime/60)
                seconds = math.floor(newtime%60)
                print("[Sleep in]   [" ..string.format("%.2d:%.2d",minutes , seconds).. "] left...")
            end
        end
        print("Back to dice...")
        seedRandomizer()
        hiloRandomizer()
        x = os.clock()
        time = math.random(3,4)
    end
end
x = os.clock()
time = math.random(3,4)
function dobet()
    print("<==========Profit view=====================>")
    wager = wager + nextbet
    if win then
        sleepToNextBet()
        --wagerBet = balance/diveWager   
        if(nextbet >= wagerBet*6*0.8)then
            seedRandomizer()
            hiloRandomizer()
        end
        nextbet = wagerBet
        chance = chanceWager
    else
        if(currentstreak == -1)then
            nextbet = wagerBet*2
            chance = chanceBack
        elseif(currentstreak == -2)then
            nextbet = wagerBet*6
        elseif(currentstreak == -3)then
            nextbet = wagerBet*18
            if(nextbet > balance)then 
                nextbet = balance
            end
        elseif(currentstreak == -4)then
            stop()
        end
    end
    
    timeRun = math.floor(os.clock() - timeStart)
    print("[High PF]:   ["..string.format("%.8f",highProfit).."]  ["..string.format("%.4f",highProfit/(oldBalance)*100).."]%")
    print("[Low PF]:    ["..string.format("%.8f",lowProfit).."]  ["..string.format("%.4f",lowProfit/(oldBalance)*100).."]%")
    if(timeRun > 0)then
        print("<==========Wager view======================>")
        print("[Wager]:     ["..string.format("%.8f",wager).."]  ["..string.format("%.4f",wager/(oldBalance)*100).."]%")
        print("[Per hour]:  ["..string.format("%.8f",wager/timeRun*3600).."]  ["..string.format("%.4f",wager/timeRun*3600/oldBalance*100).."]%")
        print("[Per day]:   ["..string.format("%.8f",wager/timeRun*86400).."]  ["..string.format("%.4f",wager/timeRun*86400/oldBalance*100).."]%")
    end
    if(balance > takeProfit)then
        stop()
    end
end
