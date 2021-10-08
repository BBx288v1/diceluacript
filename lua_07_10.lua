
baseChance = 78.57
chance     = baseChance
payout     = 1.26
divideBalance = 20000
basebet   = balance/divideBalance
taget = 1050
nextbet = basebet
divideBalanceTakePf = 10
takeprofit = balance/divideBalanceTakePf
targetToStop = balance*2

function dobet()
    if win then
        if(nextbet*payout < basebet*taget)then
            nextbet = nextbet*payout
        else
            nextbet = basebet
			basebet   = balance/divideBalance
            chance = baseChance
            resetseed()
            stop()
        end
        if(chance == newChange)then
            nextbet = basebet
            chance = baseChance
        end
    else
        nextbet = basebet
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