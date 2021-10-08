baseChance = 9.9000
chance = baseChance
payout = 10
smallBet = 0.0000001
bigBet = balance / 3000
mainBigBet = bigBet
oldBalace = balance

bet1 = smallBet
bet2 = bigBet
nextbet = bet1
noBet = 1

timeToBig = 10
timeStopBig = 20

winStreak = 0
loseStreak = 0
loseStreakHiLo = 0
timeRun = 0
timeToRsSeed = 300
maxLoseStreakHiLo = 30
numOfBigWin = 0
timeToBack  = 7


takeProfit = balance / 20
stopLost = -balance / 13
stopLostMain = stopLost
profitBack = 0

function dobet()
    timeRun = timeRun + 1
    if (win) then
        winStreak = winStreak + 1
        loseStreak = 0
        loseStreakHiLo = 0
        if (noBet == 1) then
            bet1 = smallBet
        else
            bet2 = bigBet
            numOfBigWin = numOfBigWin+1
            resetseed()
        end
        profitBack = profitBack + nextbet*(payout-1)
        nextbet = bet1
        noBet = 1
    else
        profitBack = profitBack - nextbet
        winStreak = 0
        loseStreak = loseStreak + 1
        loseStreakHiLo = loseStreakHiLo + 1
        if (noBet == 1) then
            bet1 = nextbet * (1 / (payout - 1) + 1.01)
        elseif(noBet == 2) then
            bet2 = nextbet * (1 / (payout - 1) + 1.01)
        end
        if (loseStreakHiLo >= maxLoseStreakHiLo) then
            loseStreakHiLo = 0
            if (bethigh == true) then
                bethigh = false
            else
                bethigh = true
            end
        end
        if (loseStreak >= timeToBig and loseStreak < timeStopBig) then
            nextbet = bet2
            noBet = 2
        else
            nextbet = bet1
            noBet = 1
        end
    end
    if (profit >= takeProfit) then
        profitBack = 0
        numOfBigWin = 0
        bigBet = balance / 3000
        mainBigBet = bigBet
        bet1 = smallBet
        bet2 = bigBet
        nextbet = bet1
        noBet = 1
        winStreak = 0
        loseStreak = 0
        loseStreakHiLo = 0
        timeRun = 0
        takeProfit = balance / 20
        stopLostMain = stopLost
        stopLost = -balance / 13
        resetseed()
        resetstats()
    elseif (profitBack - nextbet <= stopLost) then
        profitBack = 0
        numOfBigWin = 0
        bigBet = bigBet * 3
        bet1 = smallBet
        bet2 = bigBet
        nextbet = bet1
        noBet = 1
        winStreak = 0
        loseStreak = 0
        loseStreakHiLo = 0
        timeRun = 0
        stopLost = stopLost * 3
        resetseed()
    elseif (numOfBigWin == timeToBack  and bigBet > mainBigBet)then
        profitBack = 0
        numOfBigWin = 0
        bigBet = bigBet / 3
        bet1 = smallBet
        bet2 = bigBet
        nextbet = bet1
        noBet = 1
        winStreak = 0
        loseStreak = 0
        loseStreakHiLo = 0
        timeRun = 0
        stopLost = stopLost / 3
        resetseed()
    end
    if(balance >= oldBalace*2)then
        stop()
    end
    sleep(0.025)
end
