math.random(); math.random(); math.random()
USD = 1
PRICE = 141.6
COIN = USD/PRICE
DIV = 1050
takeProfit = COIN
stopLoss = COIN
base = COIN/DIV
sleepBet = 0.00000001
nextbet = sleepBet
timeBet = 5
multiplier = 2
betBack = base
oldBalance = COIN
risk = "high" -- classic-low-medium-high
numbers = random_array(10) -- 1-40 && max len 10
seedRandomizerX = 0
numbersRandomizerX = 0
winStreak = 0
loseStreak = 0
waitStreak = 0
WoL = true
highProfit = 0
lowProfit = 0



function seedRandomizer()
    seedRandomizerX = math.random(1, 3)
    if(seedRandomizerX == 2)then
        resetseed()
    end
end

function numbersRandomizer()
    numbersRandomizerX = math.random(1, 3)
    if(numbersRandomizerX == 2)then
        numbers = random_array(10)
    end
end

function gendWaitStreak()
    waitStreak  = math.random(1,3)
    if(waitStreak <= 1)then
        waitStreak = 0
    elseif(waitStreak <= 2)then
        waitStreak = 3
    elseif(waitStreak <= 3)then
        waitStreak = 7
    end
end

function getWoL()
    if(previousbet > 0)then
        if (currentprofit+previousbet)/previousbet >= 2 then
            WoL = true
        else
            WoL = false
        end
    else
        WoL = win
    end
end
seedRandomizer()
hl = 0
function dobet()
    getWoL()
    if WoL then
        winStreak = winStreak + 1
        if(loseStreak > waitStreak and loseStreak < waitStreak + timeBet) then
            betBack = base
            seedRandomizer()
            numbersRandomizer()
            gendWaitStreak()
        elseif(loseStreak >= waitStreak + timeBet)then
            gendWaitStreak()
        end
        nextbet = sleepBet
        loseStreak = 0
    else
        winStreak = 0
        loseStreak = loseStreak + 1
        if(loseStreak == waitStreak)then
            nextbet = betBack
        elseif(loseStreak > waitStreak and loseStreak < waitStreak + timeBet)then
            betBack = betBack * multiplier
            nextbet = betBack
        else
            if (loseStreak == waitStreak + timeBet)then
                betBack = betBack * multiplier
            end
            nextbet = sleepBet
        end
    end
    if(profit >= highProfit)then
        highProfit = profit
        base = (COIN+profit)/DIV
        betBack = base
    elseif(profit < lowProfit)then
        lowProfit = profit
    end
    print("\n\n\n\n")
    print("<==========================================>")
    print("[Next Bet]: ["..string.format("%.8f",nextbet*PRICE).."]")
    print("[Streak]:     ["..tostring(waitStreak).."]")
    print("[Profit]:      ["..string.format("%.8f",profit*PRICE).."]  ["..string.format("%.4f",profit/(oldBalance)*100).."]%")
    print("[Base Bet]:["..string.format("%.8f",base*PRICE).."]  ["..string.format("%.4f",base/(oldBalance)*100).."]%")
    print("[Bet Back]:["..string.format("%.8f",betBack*PRICE).."]  ["..string.format("%.4f",betBack/(oldBalance)*100).."]%")
    print("[High PF]:  ["..string.format("%.8f",highProfit*PRICE).."]  ["..string.format("%.4f",highProfit/(oldBalance)*100).."]%")
    print("[Low PF]:   ["..string.format("%.8f",lowProfit*PRICE).."]  ["..string.format("%.4f",lowProfit/(oldBalance)*100).."]%")
    print("<==========================================>")
    if(profit-nextbet <= stopLoss*(-1) or profit >= takeProfit)then
        stop()
    end
end


