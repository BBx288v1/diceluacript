
baseChance = 9.90
chance     = baseChance
payout     = 10
multiplier = 1.112
chanceHigh = 24.75
payoutHigh = 4
multiplierHigh = 1.35
chanceSuper = 49.50
payoutSuper = 2
multiplierSuper = 2
chanceUltra = 82.50
payoutUltra = 1.2
multiplierUltra = 6
divideBalance = 2600
bigBet   = balance/divideBalance
sleepBet = 0.0000001
nextbet = sleepBet
divideBalanceTakePf = 10
takeprofit = balance/divideBalanceTakePf
targetToStop = balance*10000

function dobet()
    if win then
        if(chance ==  baseChance and nextbet > sleepBet)then
            if(bethigh == true)then
                bethigh = false
            else
                bethigh = true
            end
        elseif(chance == chanceHigh or chance == chanceSuper or chance == chanceUltra)then
            resetseed()
        end
        nextbet = sleepBet
        chance = baseChance
    else
        if(losestreak == 20)then
			nextbet = bigBet
        elseif (losestreak > 20 and losestreak < 30)then
            nextbet = nextbet*multiplier
        elseif (losestreak == 30)then
            nextbet = nextbet*payout/(payoutHigh -1)
            chance = chanceHigh
        elseif (losestreak > 30 and losestreak < 34)then
            nextbet = nextbet*multiplierHigh
        elseif (losestreak == 34)then
            nextbet = nextbet*payoutHigh/(payoutSuper -1)
            chance = chanceSuper
        elseif (losestreak > 34 and losestreak < 36)then
            nextbet = nextbet*multiplierSuper
        elseif (losestreak == 36)then
            nextbet = nextbet*payoutSuper/(payoutUltra -1)
            chance = chanceUltra
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