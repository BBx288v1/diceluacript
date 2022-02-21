math.randomseed(os.time()) -- random initialize
math.random(); math.random(); math.random() -- warming up
listTarget = {1.02;1.03;1.04;1.05}
listChanceTarget = {97.05;96.11;95.19;94.28}
sleepBet = 0.00000001
oldBalace = balance
chanceToBig = 0
chance = 49.5
nextbet = sleepBet
timeToRun = 0
time = 1800
multiplyProfit = 1.1
takeProfitPerTime = balance*multiplyProfit
maintime = os.clock();midTime = 0;backTime=0;checkWait=false;toBig=true
takeProfit = balance*2
raseProfitPerTime = takeProfitPerTime - balance
typeBet = math.random(1, 2)
joker = math.random(1, 200)
divedeJoke = 200
joke = balance/divedeJoke
countJoke = 0
resetseed()


function dobet()
    function jokeDealer()
        joker = math.random(1, 200)
        if(joker == 99)then
            nextbet = joke
            countJoke = countJoke + 1
            print("SEND JOKES...")
        end
    end
    function sleepToNext()
        s = 0
        for i=1,10000 do s = s + i end
        if(os.clock() - x <= time )then
            newtime = time - (os.clock() - x)
            nextbet = sleepBet
            jokeDealer()
            print("Wait " ..string.format("%.2d:%.2d", math.floor(newtime/60), math.floor(newtime%60)).. " for next session... Sent "..string.format("%d",countJoke).." joke....")
            toBig = false
        else
            print("Back to bet...")
            toBig = true
            maintime = os.clock()
            takeProfitPerTime = balance*multiplyProfit
            backTime = backTime + midTime
            raseProfitPerTime = takeProfitPerTime - balance
        end
        typeBet = math.random(1, 2)
    end
    function seedRandomizer()
        seedRandomizer = math.random(0, 2)
        while (seedRandomizer >= 1) do 
            resetseed()
            seedRandomizer = seedRandomizer - 1
        end
    end
    
    function randomChane()
        CHANCE_RANDOMIZER = math.random(330,495)
        chance = CHANCE_RANDOMIZER/10
        nextbet = sleepBet
        jokeDealer()
    end
    function randomChaneReal()
        CHANCE_RANDOMIZER = math.random(1, #listChanceTarget)
        chance = listChanceTarget[CHANCE_RANDOMIZER]
        nextbet = balance*99.98/100
    end
    function randomTime()
        TIME_RANDOMIZER = math.random(1, 6)
        if(TIME_RANDOMIZER == 1 or TIME_RANDOMIZER == 2)then
            time = math.random(300, 480)
        elseif(TIME_RANDOMIZER == 3 or TIME_RANDOMIZER == 4 or TIME_RANDOMIZER == 5)then
            time = math.random(600, 900)
        elseif(TIME_RANDOMIZER == 6)then
            time = math.random(1200, 1800)
        end
    end
    function dobet1()
        e = currentstreak - timeToRun
        if win then
            if(nextbet ~= sleepBet)then
                randomChane()
            end
            if(e == 0 and toBig == true and nextbet == sleepBet)then
                randomChaneReal()
            end
        else
            if(nextbet ~= sleepBet)then
                seedRandomizer()
            end
            randomChane()
            payout = 99/chance
            timeToRun = math.floor(payout*math.random(1, 3)+0.5)
        end
    end
    function dobet2()
        e = currentstreak + timeToRun
        if win then
            if(nextbet ~= sleepBet)then
                seedRandomizer()
            end
            randomChane()
            payout = 99/chance
            timeToRun = math.floor(payout*math.random(2, 4)+0.5)+1
        else
            if(e == 0 and toBig == true)then
                randomChaneReal()
            end
        end
    end
    if(typeBet == 1)then
        dobet1()
    else
        dobet2()
    end
    if(toBig == true)then
        midTime = math.floor(os.clock() - maintime)+backTime
        print("[Time]:    ["..string.format("%.2d:%.2d", math.floor(midTime/60), math.floor(midTime%60)).."]")
        print("[Type]:    ["..string.format("%d",typeBet).."]")  
        print("[Tobet]:   ["..string.format("%d",e).."]")  
        --print("[Next Bet]: ["..string.format("%.8f",nextbet).."]  ["..string.format("%.4f",nextbet/(balance)*100).."]%")
        print("[Chance]:  ["..string.format("%.2f",chance).."]")  
        print("[Payout]:  ["..string.format("%.2f",99/chance).."]")
        print("[Profit]:  ["..string.format("%.8f",profit).."]  ["..string.format("%.4f",profit/(oldBalace)*100).."]%")
        print("[Session]: ["..string.format("%.8f",raseProfitPerTime).."]  ["..string.format("%.4f",(raseProfitPerTime)/oldBalace*100).."]%")
        print("[Jokes]:   ["..string.format("%d",countJoke).."]")  
        print("==========================")
    else
        sleepToNext()
    end
    if(checkWait == true)then
        checkWait = false
        x = os.clock()
        sleepToNext()
    end
    if(balance >= takeProfitPerTime and toBig == true)then
        checkWait = true
        randomTime()
        randomChane()
    end
    if(balance >= takeProfit)then
        print("GET RICK...")
        stop()
    end
end