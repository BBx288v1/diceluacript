chance1 = 78.57; payout1 = 1.26
chance2 = 49.50; payout2 = 2; multiply2 = 2.01
chance3 = 33.00; payout3 = 3; multiply3 = 1.51
chance4 = 16.50; payout4 = 6; multiply4 = 1.21
chance5 = 9.90; payout5 = 10; multiply5 = 1.12
chance6 = 6.60; payout6 = 15; multiply6 = 1.08
chance7 = 4.95; payout7 = 20; multiply7 = 1.06
taget = 5
divideBalance = 2420; basebet = balance/divideBalance
multiplyProfit = 1.1; takeprofit = balance*multiplyProfit
nextbet = basebet; chance = chance1
targetToStop = balance*1.2
oldBalace = balance


function dobet()
    if win then
        if(chance == chance1)then
            if(nextbet*payout1 < basebet*taget)then
                nextbet = nextbet*payout1
            else
                nextbet = basebet
            end
        else
            if(chance == chance2 or chance == chance3 or chance == chance4)then
                if(bethigh == true)then
                    bethigh = false
                else
                    bethigh = true
                end
            else
                resetseed()
            end
            nextbet = basebet
            chance = chance1
        end
    else
        if(losestreak == 1)then
			nextbet = basebet*multiply2
            chance = chance2
        elseif (losestreak > 1 and losestreak < 3)then
            nextbet = nextbet*multiply2
        elseif (losestreak == 3)then
            nextbet = nextbet*payout2/(payout3 -1)
            chance = chance3
        elseif (losestreak > 3 and losestreak < 6)then
            nextbet = nextbet*multiply3
        elseif (losestreak == 6)then
            nextbet = nextbet*payout3/(payout4 -1)
            chance = chance4
        elseif (losestreak > 6 and losestreak < 12)then
            nextbet = nextbet*multiply4
        elseif (losestreak == 12)then
            nextbet = nextbet*payout4/(payout5 -1)
            chance = chance5
        elseif (losestreak > 12 and losestreak < 22)then
            nextbet = nextbet*multiply5
        elseif (losestreak == 22)then
            nextbet = nextbet*payout5/(payout6 -1)
            chance = chance6
        elseif (losestreak > 22 and losestreak < 37)then
            nextbet = nextbet*multiply6
        elseif (losestreak == 37)then
            nextbet = nextbet*payout6/(payout7 -1)
            chance = chance6
        elseif (losestreak > 37)then
            nextbet = nextbet*multiply7
        end
    end
    if(balance >= takeprofit)then
        resetseed()
        takeprofit = balance*multiplyProfit
        basebet   = balance/divideBalance
    end
    if(balance >= targetToStop)then
        stop()
    end
    print("Proifit: "..string.format("%.4f",profit/(oldBalace)*100).."%")
end