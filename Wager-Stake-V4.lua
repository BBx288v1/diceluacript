--Warming up
math.randomseed(os.time())
math.random(); math.random(); math.random()
--Default value
diveWagerBet = 27
wagerBet = balance/diveWagerBet;betBack=wagerBet*6;mainBetBack=betBack
chanceWager = 98; chanceBack = 66;chance=chanceWager;chanceWait=66
minToBack = 1; maxToBack = 1
lostWager = 0;toGetBack = math.random(minToBack,maxToBack)
toBack = 2;toWait=false
nextbet = wagerBet
wager=0
highProfit=0;lowProfit=0
oldBalance = balance
timeStart= os.clock();timeRun = 0

resetseed()

function seedRandomizer()
    seedRandomizerX = math.random(0, 2)
    while (seedRandomizerX >= 1) do
        resetseed()
        seedRandomizerX = seedRandomizerX - 1
    end
end

function hiloRandomizer()
    hiloRandomizerX = math.random(0, 1)
    if (hiloRandomizerX == 1) then
        bethigh = true
    else
        bethigh = false
    end
end

function chanceRandomizer()
    chanceRandomizerX = math.random(1, 2)
    if (chanceRandomizerX == 1) then
        chanceWait = 49.5
        toBack = math.floor(99/chanceWait*math.random(2, 5)+0.5) + 1
    else
        chanceWait = 66
        toBack = math.floor(99/chanceWait*math.random(2, 5)+0.5) + 1
    end
end

function toGetBackRandimizer()
    toGetBack = math.random(minToBack,maxToBack)
end
function dobet()
    wager = wager + nextbet
    if win then
        if(chance ~= chanceWager and balance > oldBalance)then
            toWait = false
            seedRandomizer()
            hiloRandomizer()
            toGetBackRandimizer()
            chanceRandomizer()
            lostWager = 0
        end
        if(balance > oldBalance)then
            --lostWager = 0
        end
        nextbet = wagerBet
        chance = chanceWager
    else
        if(toWait == false)then
            if(balance < oldBalance)then
                lostWager = lostWager + 1
            end
            if(lostWager == toGetBack)then
                toWait = true
                chanceRandomizer()
            end
        end
    end
    if(toWait == true)then
        if((lastBet.roll > chanceWait and bethigh==false) or (lastBet.roll <(100-chanceWait) and bethigh==true))then
            toBack = toBack - 1
        else
            chanceRandomizer()
        end
        
        if(toBack == 0)then
            nextbet = betBack
            if(nextbet > balance)then
                nextbet=balance
            end
            chance = chanceBack
            ching()
        elseif(toBack == -1)then
            betBack = betBack*3
            chance = chanceWager
            nextbet = wagerBet
            chanceRandomizer()
            ching()
        end
    end
    if(profit > highProfit)then
        highProfit = profit
    elseif(profit < lowProfit)then
        lowProfit = profit
    end
    timeRun = math.floor(os.clock() - timeStart)
    print("\n\n\n\n\n")
    print("<==========================================>")
    print("[Next Bet]:  ["..string.format("%.8f",nextbet).."]")
    print("[To Bet]:    ["..string.format("%d",toGetBack-lostWager).."]")
    print("[To Wait]:   ["..tostring(toWait).."]")
    print("[To Back]:   ["..string.format("%d",toBack).."]")
    print("[C Wait]:    ["..string.format("%.2f",chanceWait).."]")
    print("[High PF]:   ["..string.format("%.8f",highProfit).."]  ["..string.format("%.4f",highProfit/(oldBalance)*100).."]%")
    print("[Low PF]:    ["..string.format("%.8f",lowProfit).."]  ["..string.format("%.4f",lowProfit/(oldBalance)*100).."]%")
    if(timeRun > 0)then
        print("<==========Wager view======================>")
        print("[Wager]:     ["..string.format("%.8f",wager).."]  ["..string.format("%.4f",wager/(oldBalance)*100).."]%")
        print("[Per hour]:  ["..string.format("%.8f",wager/timeRun*3600).."]  ["..string.format("%.4f",wager/timeRun*3600/oldBalance*100).."]%")
        print("[Per day]:   ["..string.format("%.8f",wager/timeRun*86400).."]  ["..string.format("%.4f",wager/timeRun*86400/oldBalance*100).."]%")
    end
    print("<==========================================>")
end
