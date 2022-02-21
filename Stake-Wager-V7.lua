--Warming up
math.random(); math.random(); math.random()
price        = 0.082
stopLossUSD  = 5
stopLoss     = stopLossUSD/price
if (balance < stopLoss) then
    stopLoss = balance
end
takeProfit   = stopLoss*0.2
oldBalance   = stopLoss
wagerBet     = stopLoss/16
sleepBet     = 0.00001300
basebet      = wagerBet/2
betBack      = basebet
nextbet      = wagerBet
multiply     = 2
chanceWager  = 98
chanceLast   = chanceWager
chanceBack   = 49.5
chance       = chanceWager
wager        = 0
highProfit   = 0
lowProfit    = 0
timeStart    = os.clock()
timeRun      = 0
mainToWait   = 6
toWait       = mainToWait
toPause      = -4
nextChange   = 0
typeBet      = 1
randomBig    = math.random(1,100)
resetseed()

function randomBigBet()
    randomBig = math.random(1,100)
end

function seedRandomizer()
    seedRandomizerX = math.random(0, 2)
    if(seedRandomizerX ~= 2)then
        seedRandomizerX = math.random(0, 2)
        while (seedRandomizerX >= 1) do
            resetseed()
            seedRandomizerX = seedRandomizerX - 1
        end
    end
end

function hiloRandomizer()
    hiloRandomizerX = math.random(0, 2)
    if(hiloRandomizerX ~= 2)then
        hiloRandomizerX = math.random(0, 1)
        if (hiloRandomizerX == 1) then
            bethigh = true
        else
            bethigh = false
        end
    end
end

function randomChangeSeed()
    nextChange = math.random(bets+3,bets+300)
end

function dobet1()
    if win then
        if(chanceLast == chanceBack)then
            if(toWait <= 0)then
                nextbet = wagerBet
                chanceLast = chanceWager
                betBack = basebet
                seedRandomizer()
                hiloRandomizer()
            end
            toWait = mainToWait
        elseif(chance == chanceWager and nextbet > wagerBet)then
            nextbet = wagerBet
        end
    else
        if(chanceLast ~= chanceWager) then
            toWait = toWait - 1
        elseif(chanceLast == chanceWager)then
            chanceLast = chanceBack
            nextbet = sleepBet
        end
        if(chanceLast == chanceBack)then
            if(toWait <= 0 and toWait > toPause)then
                betBack = betBack*multiply
                nextbet = betBack
            else
                nextbet = sleepBet
            end
        end
    end
    chance = chanceLast
    randomBig = randomBig - 1
    if(randomBig <= 0 and (toWait < toPause or toWait > 0))then
        nextbet = stopLoss + profit - 0.0000001
        chance = chanceWager
        randomBigBet()
    end
end

function dobet2()
    if(bets >= nextChange)then
        seedRandomizer()
        hiloRandomizer()
        randomChangeSeed()
    end
end

hiloRandomizer()

function dobet()
    wager = wager + nextbet
    if(typeBet == 1)then
        dobet1()
    else
        dobet2()
    end
    if(typeBet == 1)then
        if(profit > highProfit)then
            highProfit = profit
            wagerBet     = stopLoss/16
            basebet      = wagerBet/2
            betBack      = basebet
        elseif(profit < lowProfit)then
            lowProfit = profit
        end
    end
    timeRun = math.floor(os.clock() - timeStart)
    print("\n\n\n\n\n")
    print("<==========================================>")
    print("[Type Bet]:\t["..tostring(typeBet).."]")
    print("[Next Bet]:\t["..string.format("%.8f",nextbet*price).."]")
    print("[Chance]:\t\t["..string.format("%.2f",chance).."]")
    print("[To Wait]:\t\t["..tostring(toWait).."]")
    print("[To Big]:\t\t["..tostring(randomBig).."]")
    print("[Base Bet]:\t["..string.format("%.8f",basebet*price).."]  ["..string.format("%.4f",basebet/(oldBalance)*100).."]%")
    print("[Bet Back]:\t["..string.format("%.8f",betBack*price).."]  ["..string.format("%.4f",betBack/(oldBalance)*100).."]%")
    print("[High PF]:\t\t["..string.format("%.8f",highProfit*price).."]  ["..string.format("%.4f",highProfit/(oldBalance)*100).."]%")
    print("[Low PF]:\t\t["..string.format("%.8f",lowProfit*price).."]  ["..string.format("%.4f",lowProfit/(oldBalance)*100).."]%")
    if(timeRun > 0)then
        print("<==========================================>")
        if(profit < 0)then
            print("[CurWager]:\t["..string.format("%.8f",profit*price).."]  ["..string.format("%.4f",wager/(profit*(-1))*100).."]%")
        end
        print("[Wager]:\t\t["..string.format("%.8f",wager*price).."]  ["..string.format("%.4f",wager/(oldBalance)*100).."]%")
        print("[Per hour]:\t["..string.format("%.8f",wager/timeRun*3600).."]  ["..string.format("%.4f",wager/timeRun*3600/oldBalance*100).."]%")
        print("[Per day]:\t\t["..string.format("%.8f",wager/timeRun*86400).."]  ["..string.format("%.4f",wager/timeRun*86400/oldBalance*100).."]%")
    end
    print("<==========================================>")
    if((profit - nextbet< stopLoss*(-1)*1.3 and chance == chanceBack) or (profit < stopLoss*(-1) and chance ~= chanceBack))then
        stop()
    end
    if(profit >= takeProfit)then
        highProfit = 0
        lowProfit = 0
        typeBet = 2
    elseif(profit < 0)then
        typeBet = 1
    end
end