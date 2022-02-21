--Random initialize
math.randomseed(os.time())
--Warming up
math.random(); math.random(); math.random()
--List setting chance
listTarget = {1.01;1.02;1.03};listChanceTarget = {98;97.05;96.11}
--Default value
highProfit = 0;lowProfit = 0
oldBalance = balance;sleepBet = 0.0000000
chance     = 49.5;nextbet = sleepBet
wager = 0
--Sleep setting
timeToRun = math.floor(99/chance*math.random(1, 3)+0.5)
time      = 100;maintime = os.clock();timeStart = os.clock();timeRun = 0;midTime = 0;backTime=0;checkWait=false;toBig=true
--Type bet setting
typeBet = math.random(1, 2)
if(typeBet ==1)then
    timeToRun = math.floor(99/chance*math.random(1, 3)+0.5)
elseif(typeBet == 2)then
    timeToRun = math.floor(99/chance*math.random(2, 4)+0.5)+1
end
--Bet setting
divBalanceToBig = 6
bigBig            = oldBalance*0.9998/divBalanceToBig
mainBigBig        = bigBig
multiplierBig     = 1
multiplyProfit    = 0.1
resMain           = balance + bigBig
takeProfitPerTime = balance + bigBig*multiplyProfit;raseProfitPerTime = takeProfitPerTime - balance
--Joke value
joker = math.random(1, 200)
divedeJoke = math.random(200, 300)
joke = bigBig/divedeJoke;countJoke = 0
--Stop take profit
takeProfit = balance*2
resetseed()


function dobet()
    wager = wager + nextbet
    function jokeDealer()
        joker = math.random(1, 200)
        if(joker == 99)then
            divedeJoke = math.random(200, 300)
            joke = bigBig/divedeJoke
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
            print("Wait " ..string.format("%.2d:%.2d", math.floor(newtime/60), math.floor(newtime%60)).. " for next session... Sent "..string.format("%d",countJoke).." jokes....")
            toBig = false
        else
            print("Back to bet...")
            toBig = true
            maintime = os.clock()
            takeProfitPerTime = balance + bigBig*multiplyProfit
            raseProfitPerTime = takeProfitPerTime - balance
            backTime = backTime + midTime
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
        payout = 99/chance
        timeToRun = math.floor(payout*math.random(2, 4)+0.5)
        if(typeBet ==1)then
            timeToRun = math.floor(99/chance*math.random(1, 3)+0.5)
        elseif(typeBet == 2)then
            timeToRun = math.floor(99/chance*math.random(2, 4)+0.5)+1
        end
    end
    function randomChaneReal()
        CHANCE_RANDOMIZER = math.random(1, #listChanceTarget)
        chance = listChanceTarget[CHANCE_RANDOMIZER]
        bigBig = math.random(math.floor((oldBalance+highProfit)/8*100000000), math.floor((oldBalance+highProfit)/6*100000000))/100000000
        nextbet = bigBig
        if(bigBig > balance)then
            nextbet = balance
        end
    end
    function randomTime()
        TIME_RANDOMIZER = math.random(1, 6)
        if(TIME_RANDOMIZER == 1 or TIME_RANDOMIZER == 2 or TIME_RANDOMIZER == 3)then
            time = math.random(300, 600)
        elseif(TIME_RANDOMIZER == 4 or TIME_RANDOMIZER == 5)then
            time = math.random(600, 900)
        elseif(TIME_RANDOMIZER == 6)then
            time = math.random(900, 1800)
        end
    end
    function dobet1()
        e = currentstreak - timeToRun
        if win then
            if(nextbet ~= sleepBet)then
                randomChane()
                seedRandomizer()
            elseif(toBig == true)then
                if(e == 0 and nextbet == sleepBet)then
                    randomChaneReal()
                else
                    jokeDealer()
                end
            end
        else
            if(toBig == true)then
                if(nextbet >= mainBigBig*0.9)then
                    bigBig = bigBig*multiplierBig
                    resMain = oldBalance+highProfit
                    takeProfitPerTime = balance + bigBig*multiplyProfit
                    raseProfitPerTime = takeProfitPerTime - balance
                    randomTime()
                    x = os.clock()
                    sleepToNext()
                    randomChane()
                    seedRandomizer()
                else
                    randomChane()
                end
            else
                randomChane()
            end
            
        end
    end
    function dobet2()
        e = currentstreak + timeToRun
        if win then
            if(nextbet ~= sleepBet)then
                seedRandomizer()
            end
            randomChane()   
        else
            if(toBig == true)then
                if(nextbet >= mainBigBig*0.9)then
                    bigBig = bigBig*multiplierBig
                    resMain = oldBalance+highProfit
                    takeProfitPerTime = balance + bigBig*multiplyProfit
                    raseProfitPerTime = takeProfitPerTime - balance
                    randomTime()
                    x = os.clock()
                    sleepToNext()
                    randomChane()
                    seedRandomizer()
                elseif(e == 0)then
                    randomChaneReal()
                else
                    jokeDealer()
                end
            end
        end
    end
    if(typeBet == 1)then
        dobet1()
    else
        dobet2()
    end
    if(profit > highProfit)then
        highProfit = profit
    elseif(profit < lowProfit)then
        lowProfit = profit
    end
    print("\n\n\n\n\n<==========================================>")
    if(toBig == true)then
        midTime = math.floor(os.clock() - maintime)+backTime
        print("<==========Bet view========================>")
        print("[Time]:    ["..string.format("%.2d:%.2d", math.floor(midTime/60), math.floor(midTime%60)).."]")
        print("[Type]:    ["..string.format("%d",typeBet).."]")  
        print("[Tobet]:   ["..string.format("%d",e).."]")  
        print("[Chance]:  ["..string.format("%.2f",chance).."]")  
        print("[Payout]:  ["..string.format("%.2f",99/chance).."]")
        print("[Profit]:  ["..string.format("%.8f",profit).."]  ["..string.format("%.4f",profit/(oldBalance)*100).."]%")
        print("[Session]: ["..string.format("%.8f",raseProfitPerTime).."]  ["..string.format("%.4f",(raseProfitPerTime)/oldBalance*100).."]%")
        print("[Jokes]:   ["..string.format("%d",countJoke).."]")  
        print("[High PF]: ["..string.format("%.8f",highProfit).."]  ["..string.format("%.4f",highProfit/(oldBalance)*100).."]%")
        print("[Low PF]:  ["..string.format("%.8f",lowProfit).."]  ["..string.format("%.4f",lowProfit/(oldBalance)*100).."]%")
        
    else
        sleepToNext()
    end
    timeRun = math.floor(os.clock() - timeStart)
    if(timeRun > 0)then
        print("<==========Wager view======================>")
        print("[Wager]:   ["..string.format("%.8f",wager).."]  ["..string.format("%.4f",wager/(oldBalance)*100).."]%")
        print("[Per hour]:["..string.format("%.8f",wager/timeRun*3600).."]  ["..string.format("%.4f",wager/timeRun*3600/oldBalance*100).."]%")
        print("[Per day]: ["..string.format("%.8f",wager/timeRun*86400).."]  ["..string.format("%.4f",wager/timeRun*86400/oldBalance*100).."]%")
    end
    print("[Big Bet]: ["..string.format("%.8f",bigBig).."]  ["..string.format("%.4f",bigBig/oldBalance*100).."]%")
    
    if(checkWait == true)then
        checkWait = false
        x = os.clock()
        sleepToNext()
    end
    if(balance >= takeProfitPerTime and toBig == true)then
        checkWait = true
        randomTime()
        randomChane()
        if(bigBig*0.9 <= mainBigBig or balance >= resMain*0.999)then
            bigBig = balance*0.9998/divBalanceToBig
            mainBigBig = bigBig
        end
    end
    if(balance >= takeProfit)then
        print("GET RICK...")
        stop()
    end
end