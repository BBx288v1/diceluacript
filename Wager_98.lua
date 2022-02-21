diveWager = 27
chanceWager = 98
chanceBack = 66
wagerBet = balance/diveWager
nextbet = wagerBet
wager = 0
timeStart = os.clock()
oldBalance = balance
takeprofit = balance*2

function dobet()
    wager = wager + nextbet
    if win then     
        --wagerBet = balance/diveWager   
        nextbet = wagerBet
        chance = chanceWager
        loseStreakS = 0
    else
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
