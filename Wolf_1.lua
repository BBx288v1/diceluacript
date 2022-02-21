-- Chance x2
baseChance = 33
-- Chance x1.5
changeChance = 66
-- Giá trị nhân khi thua khi đổi payout thành 1.5
multiplier = 4
-- Giá trị đặt cược khi chờ chuỗi thua
betleep = 0.00000001
-- Giá trị đặt cược khi thay đổi payout thành 1.5
base = 11
-- Dừng lại khi thắng
valueTaken = 22
takeProfit = balance + valueTaken
--Thời gian đợi cho lân cược tiếp theo
time = 3600
-----------------------------------------------
chance = baseChance;betBackUp = base;nextbet = betleep;sleepToBet = 7; maxBetToOut = 2;;currentLoseStreak = 0;currentWinStreak  = 0;s = 0;resetstats();resetseed();maintime = os.clock();midTime = 0;maxBet = base;highProfit = 0;lowProfit = 0;oldBalace = balance;maxBetBalance = balance;bigBet = true


function dobet()
    function sleepToNext()
        s = 0
        for i=1,100000 do s = s + i end
        if(os.clock() - x <= time )then
            newtime = time - (os.clock() - x)
            print("Đợi " ..string.format("%d:%d", math.floor(newtime/60), math.floor(newtime%60)).. " cho đến lần cược tiếp theo...")
            nextbet = betleep
            bigBet=false
        else
            print("Trở lại cược...")
            bigBet=true
        end
    end

    function hiloRandomizer()
        hiloRandomizer = math.random(0, 1); 
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
        
        currentWinStreak  = 0
        if(bigBet == true) then
            currentLoseStreak = currentLoseStreak + 1
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
    end
    if(balance >= takeProfit)then
        takeProfit = balance + valueTaken
        x = os.clock()
        sleepToNext()
        seedRandomizer()
        hiloRandomizer()
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
    if(bigBet == true)then
        midTime = math.floor(os.clock() - maintime)
        print("[Time]:     ["..string.format("%d:%d", math.floor(midTime/60), math.floor(midTime%60)).."]") 
        print("[Payout]:   ["..string.format("%.2f",99/chance).."]")
        print("[Chance]:   ["..string.format("%.2f",chance).."]")  
        print("[Bet High]: ["..tostring(bethigh).."]")
        print("[Max Bet]:  ["..string.format("%.8f",maxBet).."]  ["..string.format("%.4f",maxBet/(maxBetBalance)*100).."]%")
        print("[Next Bet]: ["..string.format("%.8f",nextbet).."]  ["..string.format("%.4f",nextbet/(balance)*100).."]%")
        print("[Profit]:   ["..string.format("%.8f",profit).."]  ["..string.format("%.4f",profit/(oldBalace)*100).."]%")
        print("[High PF]:  ["..string.format("%.8f",highProfit).."]  ["..string.format("%.4f",highProfit/(oldBalace)*100).."]%")
        print("[Low PF]:   ["..string.format("%.8f",lowProfit).."]  ["..string.format("%.4f",lowProfit/(oldBalace)*100).."]%")
        print("==========================");
    else
        sleepToNext()
    end
end