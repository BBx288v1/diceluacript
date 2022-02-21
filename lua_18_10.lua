listPayout   = {1.1,1.12,1.13,1.15,1.19,1.26}
listChance   = {90,88.39,87.61,86.08,83.19,78.57}
listBaseChance = {33,49.5}
chance       = listBaseChance[1]
payout       = listPayout[1]
divedeBalance = 128; base = balance/divedeBalance;currentbase = base;sleepBet = 0.00000001; nextbet = sleepBet
listBet = {base,base,base,base,base}
listCurrentBase = {base,base,base,base,base}
oldBalance    = balance
highProfit = 0; lowProfit = 0; maxBet = 0
loseStreak = 0
resetseed()
NUMRANDB = 0
timeToBig = 7
target = 2
math.randomseed(os.time()) -- random initialize
math.random(); math.random(); math.random() -- warming up
function dobet()
    function randomSleepChance()
        NUMRANDD = math.random(1, #listBaseChance)
        chance = listBaseChance[NUMRANDD]
        timeToBig = 99/chance*2 + 1
    end
    function randomDice()
        NUMRAND = math.random(1, #listChance)
        chance = listChance[NUMRAND]
        payout = listPayout[NUMRAND]
        NUMRANDB = math.random(1, #listBet)
        nextbet = listBet[NUMRANDB]
        currentbase = listCurrentBase[NUMRANDB]
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
        loseStreak = 0
        if(nextbet ~= sleepBet)then        
            if(nextbet*payout < currentbase * target) then
                nextbet   = nextbet*payout
                listBet[NUMRANDB] = nextbet
            else
                base = balance/divedeBalance
                currentbase = base
                listBet[NUMRANDB] = currentbase
            end
            listCurrentBase[NUMRANDB] = currentbase
            nextbet = sleepBet
            randomSleepChance()
            hiloRandomizer()
        else
            randomSleepChance()
        end
    else
        loseStreak = loseStreak + 1
        if(nextbet ~= sleepBet)then
            currentbase = currentbase*2
            listCurrentBase[NUMRANDB] = currentbase
            listBet[NUMRANDB] = currentbase
            nextbet = sleepBet
            randomSleepChance()
        end
        if(loseStreak == timeToBig)then
            randomDice()
            hiloRandomizer()
            loseStreak = 0
        end
    end
    if(profit > highProfit)then
        highProfit = profit
    elseif(profit < lowProfit)then
        lowProfit = profit
    end
    print("[Bets]:  ["..string.format("%d",bets).."]")  
    print("[Chance]:  ["..string.format("%.2f",chance).."]")  
    print("[Bet High]: ["..tostring(bethigh).."]")
    print("[Base]:      ["..string.format("%.8f",currentbase).."]  ["..string.format("%.4f",currentbase/(balance)*100).."]%")
    print("[Next Bet]: ["..string.format("%.8f",nextbet).."]  ["..string.format("%.4f",nextbet/(balance)*100).."]%")
    print("[Profit]:   ["..string.format("%.8f",profit).."]  ["..string.format("%.4f",profit/(oldBalance)*100).."]%")
    print("[High PF]:  ["..string.format("%.8f",highProfit).."]  ["..string.format("%.4f",highProfit/(oldBalance)*100).."]%")
    print("[Low PF]:   ["..string.format("%.8f",lowProfit).."]  ["..string.format("%.4f",lowProfit/(oldBalance)*100).."]%")
    print("==========================")
end