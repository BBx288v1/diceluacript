-- Chance x3
baseChance = 33
-- Chance x1.5
changeChance = 66
-- Giá trị nhân khi thua khi đổi payout thành 1.5
multiplier = 4
-- Giá trị đặt cược khi chờ chuỗi thua
betleep = 0.0000000
-- Giá trị đặt cược khi thay đổi payout thành 1.5
divedeBalance = 50
base = balance/divedeBalance
-- Dừng lại khi thắng
multiplierBase = 2
valueTaken = base*multiplierBase
takeProfit = balance + valueTaken
--Thời gian đợi cho lân cược tiếp theo
time = 1500
-----------------------------------------------
chance = baseChance;betBackUp = base;nextbet = betleep;sleepToBet = 7; maxBetToOut = 2;currentLoseStreak = 0;currentWinStreak  = 0;s = 0;resetstats();resetseed();maintime = os.clock();midTime = 0;maxBet = base;highProfit = 0;lowProfit = 0;oldBalace = balance;maxBetBalance = balance;backTime=0;checkWait=false


function dobet()
    function sleepToNext()
        s = 0
        for i=1,100000 do s = s + i end
        if(os.clock() - x <= time )then
            newtime = time - (os.clock() - x)
            print("Đợi " ..string.format("%.2d:%.2d", math.floor(newtime/60), math.floor(newtime%60)).. " cho đến lần cược tiếp theo...")
            sleepToNext()
        else
            print("Trở lại cược...")
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
     
    function seedRandomizer()
        seedRandomizer = math.random(0, 2)
        while (seedRandomizer >= 1) do 
            resetseed()
            seedRandomizer = seedRandomizer - 1
        end
    end
        
    if win then        
        loseStreak        = 0
        chance            = baseChance
        nextbet           = betleep
        currentWinStreak  = currentWinStreak + 1
        currentLoseStreak = 0
    else
        currentLoseStreak = currentLoseStreak + 1
        currentWinStreak  = 0
        if (currentLoseStreak == sleepToBet) then
            chance = changeChance
            nextbet = base
        elseif (currentLoseStreak > sleepToBet and currentLoseStreak < sleepToBet + maxBetToOut) then
            nextbet = nextbet * multiplier
        elseif (currentLoseStreak >= sleepToBet + maxBetToOut) then
            currentLoseStreak = 0
            chance            = baseChance
            nextbet           = betleep
        end
    end
    if(profit > highProfit)then
        highProfit = profit
    elseif(profit < lowProfit)then
        lowProfit = profit
    end
    if(nextbet > maxBet)then
        maxBet = nextbet
        maxBetBalance = balance
    end
    midTime = math.floor(os.clock() - maintime)+backTime
    print("[Time]:     ["..string.format("%.2d:%.2d", math.floor(midTime/60), math.floor(midTime%60)).."]") 
    print("[Payout]:   ["..string.format("%.2f",99/chance).."]")
    print("[Chance]:   ["..string.format("%.2f",chance).."]")  
    print("[Bet High]: ["..tostring(bethigh).."]")
    print("[Max Bet]:  ["..string.format("%.8f",maxBet).."]  ["..string.format("%.4f",maxBet/(maxBetBalance)*100).."]%")
    print("[Next Bet]: ["..string.format("%.8f",nextbet).."]  ["..string.format("%.4f",nextbet/(balance)*100).."]%")
    print("[Profit]:   ["..string.format("%.8f",profit).."]  ["..string.format("%.4f",profit/(oldBalace)*100).."]%")
    print("[High PF]:  ["..string.format("%.8f",highProfit).."]  ["..string.format("%.4f",highProfit/(oldBalace)*100).."]%")
    print("[Low PF]:   ["..string.format("%.8f",lowProfit).."]  ["..string.format("%.4f",lowProfit/(oldBalace)*100).."]%")
    print("==========================")
    if(checkWait == true)then
        checkWait = false
        base = balance/divedeBalance
        valueTaken = base*multiplierBase
        takeProfit = balance + valueTaken
        takeProfit = balance + valueTaken
        backTime = backTime + midTime
        x = os.clock()
        sleepToNext()
        seedRandomizer()
        hiloRandomizer()
        maintime = os.clock()
    end
    if(balance >= takeProfit)then
        checkWait = true
    end
end