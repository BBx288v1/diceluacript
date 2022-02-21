diveWager = 27
chanceWager = 98
chanceBack = 66
wagerBet = balance/diveWager
nextbet = wagerBet
wager = 0
timeStart = os.clock()
oldBalance = balance

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
    if(timeRun > 0)then
        print("<==========Wager view======================>")
        print("[Wager]:   ["..string.format("%.8f",wager).."]  ["..string.format("%.4f",wager/(oldBalance)*100).."]%")
        print("[Per hour]:["..string.format("%.8f",wager/timeRun*3600).."]  ["..string.format("%.4f",wager/timeRun*3600/oldBalance*100).."]%")
        print("[Per day]: ["..string.format("%.8f",wager/timeRun*86400).."]  ["..string.format("%.4f",wager/timeRun*86400/oldBalance*100).."]%")
    end
end
