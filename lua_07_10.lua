
baseChance = 78.57; newChange = 49.50; highChance = 24.75;chance = baseChance
payout     = 1.26;newPayout = 2;highPayout = 4
multiply = 2;multiplyHighChance = 1.5
divideBalance = 20000;basebet   = balance/divideBalance
taget = 5;nextbet = basebet;maxLoseStreak = 5
divideBalanceTakePf = 10;takeprofit = balance/divideBalanceTakePf;targetToStop = balance*1.2

function dobet()
    if win then
        if(nextbet*payout < basebet*taget)then
            nextbet = nextbet*payout
        else
            nextbet = basebet
			basebet   = balance/divideBalance
            chance = baseChance
            resetseed()
        end
        if(chance == newChange)then
            nextbet = basebet
            chance = baseChance
        end
    else
        if(losestreak == 1)then
            chance = newChange
			nextbet = nextbet*multiply
        end
        if(losestreak % maxLoseStreak == 0)then
            if(chance == newChange)then
                nextbet = nextbet*newPayout/(payout-1)
            elseif(chance ==highChance)then
                nextbet = nextbet*highPayout/(payout-1)
            end
            chance = baseChance
        elseif((losestreak % (maxLoseStreak+1) == 0) or (losestreak>10 and (losestreak-1)%5==0))then
            chance = highChance
            nextbet = nextbet*multiply
        else
            if(chance == newChange)then
                nextbet = nextbet*multiply
            elseif(chance == highChance)then
                nextbet = nextbet*multiplyHighChance
            end
        end
    end
    if(profit >= takeprofit)then
        resetstats()
        resetseed()
        takeprofit = balance/divideBalanceTakePf
        basebet   = balance/divideBalance
        if(balance >= targetToStop)then
            stop()
        end
    end
end