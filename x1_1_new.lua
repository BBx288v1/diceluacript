
baseChance    = 9.8
chanceChange  = 88.8
chance        = baseChance
multiplier    = 1.1
big           = balance/10
mainBig       = big
small         = 0.00000001
mainSmall     = small
nextbet       = small
currentLose   = 0
loseStreak    = 0
stopLose      = balance
takeProfit    = balance
currentProfit = balance/50
largebalance,loseamount,largestloss,wager=0,0,0,0
profitC = 0
math.randomseed(os.time()) -- random initialize
math.random(); math.random(); math.random() -- warming up
timeToBig = 10

function dobet()
    wager = wager + nextbet
    if win then
        currentLose = 0
        loseStreak = 0
        profitC = profitC + nextbet*(98/chance-1)
        if(nextbet > small)then
            timeToBig = math.random(5,15)
            if(big * multiplier < mainBig*2)then
                big = big * multiplier  
            else
                big = mainBig
                if(profitC >= currentProfit) then
                    profitC       = 0
                    big           = balance/10
          			mainBig       = big          
          			currentProfit = balance/50
                    stopLose      = balance
                    resetseed()
                end
            end
            if(bethigh == true)then
                bethigh = false
            else
                bethigh = true
            end
        end
        chance      = baseChance
        nextbet     = small
        
    else
        currentLose = currentLose+nextbet
        profitC = profitC-nextbet
        loseStreak = loseStreak + 1
        if(nextbet > small)then
            timeToBig = math.random(5,15)
            big = big*(1/(multiplier-1)+1)
            if(bethigh == true)then
                bethigh = false
            else
                bethigh = true
            end
        end
        if(loseStreak == timeToBig) then
            loseStreak = 0
            nextbet = big
            chance = chanceChange
        else
            nextbet = small
            chance = baseChance
        end
    end
    if(profit >= takeProfit or profit-nextbet <= -stopLose)then
        stop()
    end
    if balance>largebalance then largebalance=balance;loseamount=0 else loseamount=largebalance-balance end
    if loseamount>largestloss then largestloss=loseamount end
    --function odds()sequence=0.3;function PleaseHoldTheLine(sequence)function w(a)s=os.clock()repeat until os.clock()>s+a end;AnnoyingMusic=os.time()p=sequence*3;while os.time()<AnnoyingMusic+sequence do repeat print(".")w(p)print("..")w(p)print("...")w(p)until os.time()>AnnoyingMusic+sequence end;repeat until os.time()>AnnoyingMusic+sequence end;function initialize()if initialized!=true then print("initializing")initialized=true;streak=0;streak={}streak[1]=0;set=false end end;initialize()if nextbet>previousbet then if set!=true then chance=lastBet.chance;streak[1]=tonumber(math.floor(math.log(balance/basebet*(-1+nextbet/previousbet)+1)/math.log(nextbet/previousbet)))print("░▒▓█â–‘â–’â–“â–ˆ % calculate maximum survivable streak % â–ˆâ–“â–’â–‘█▓▒░")PleaseHoldTheLine(sequence)print("your balance is: "..string.format("%.8f",balance))PleaseHoldTheLine(sequence)print("with a basebet of: "..string.format("%.8f",basebet))PleaseHoldTheLine(sequence)print("equals results in a divider of: ".." "..string.format("%.0f",balance/basebet))PleaseHoldTheLine(sequence)print("while increasing for: "..string.format("%.4f",nextbet/previousbet*100-100).."%")PleaseHoldTheLine(sequence)print("resulting that you can resist: "..streak[1].." consecutive losses before busting")PleaseHoldTheLine(sequence)print("the theoretical odds of "..streak[1].." consecutive losses at "..string.format("%.4f",chance).."% chance are ~ "..string.format("%0.0f",1/((100-chance)/100)^streak[1]).." to 1")print("bust probability: "..string.format("%.8f",(1-chance/100)^streak[1]).."%\nMaximum lose streak : "..streak[1].."\n".."\nrollslimit: "..math.floor(1/(1-chance/100)^streak[1]))PleaseHoldTheLine(3)set=true end end end;if bets<5 then odds()end;   print(string.rep("\n",64))
    print("\n\nx>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<x")
    print("profit: "..string.format("%.8f",profitC).." | "..string.format("%.4f",profitC/(balance-profitC)*100).."%")
    print("largest loss: "..string.format("%.8f",largestloss).." | "..string.format("%.4f",largestloss/(balance-profitC)*100).."%")
    print("wager: "..string.format("%.8f",wager).." | "..string.format("%2.4f",wager/(balance-profitC)).."x")
    print("Time to Big: "..string.format("%.8f",big).." is "..string.format("%d",timeToBig))
    print("x>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<x\n\n")
end