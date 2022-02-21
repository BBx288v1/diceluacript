diveWager = 27
chanceWager = 98
chanceBack = 66
balanceS = 11
wagerBet = balance/(diveWager*balanceS)
listWagerBet = {wagerBet,wagerBet*10}
nextbet = wagerBet
wager = 0
timeStart = os.clock()
oldBalance = balance
takeprofit = balance*2
loseStreakS = 0
noWager = 1

function dobet()
    wager = wager + nextbet
    function seedRandomizer()
        seedRandomizer = math.random(0, 2)
        while (seedRandomizer >= 1) do 
            resetseed()
            seedRandomizer = seedRandomizer - 1
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
    if win then     
        --wagerBet = balance/diveWager   
        if(nextbet >= wagerBet*2*0.8)then
            seedRandomizer()
            hiloRandomizer()
        end
        if(balance >= oldBalance)then
            noWager = 1
        end
        wagerBet = listWagerBet[noWager]
        nextbet = wagerBet
        chance = chanceWager
        loseStreakS = 0
    else
        loseStreakS = loseStreakS + 1
        if(loseStreakS == 1)then
            nextbet = wagerBet*2
            chance = chanceBack
        elseif(loseStreakS == 2)then
            nextbet = wagerBet*6
        elseif(loseStreakS == 3)then
            nextbet = wagerBet*18
            if(nextbet > balance)then 
                nextbet = balance
            end
        elseif(loseStreakS == 4)then
            loseStreakS = 0
            noWager = noWager + 1
            wagerBet = listWagerBet[noWager]            
            nextbet = wagerBet
            seedRandomizer()
            hiloRandomizer()
        end
    end
    timeRun = math.floor(os.clock() - timeStart)
    if(timeRun > 0)then
        print("<==========Wager view======================>")
        print("[Base]:    ["..string.format("%.8f",wagerBet).."]  ["..string.format("%.4f",wager/(oldBalance)*100).."]%")
        print("[Wager]:   ["..string.format("%.8f",wager).."]  ["..string.format("%.4f",wager/(oldBalance)*100).."]%")
        print("[Per hour]:["..string.format("%.8f",wager/timeRun*3600).."]  ["..string.format("%.4f",wager/timeRun*3600/oldBalance*100).."]%")
        print("[Per day]: ["..string.format("%.8f",wager/timeRun*86400).."]  ["..string.format("%.4f",wager/timeRun*86400/oldBalance*100).."]%")
    end
    if(balance >= takeprofit)then
        stop()
    end
end
