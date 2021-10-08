
baseChance      = 49.5
stepChance      = 5
chance          = baseChance
maxChance       = 70
multiplier      = 2
base            = balance/250000
nextbet         = base
currentLose     = 0
currentWinPrice = base*(multiplier-1)
stopLose        = balance
takeProfit      = balance
currentProfit   = balance/20
largebalance,loseamount,largestloss,wager=0,0,0,0
profitC = 0

function dobet()
    wager = wager + nextbet
    if win then
        currentLose = 0
        profitC = profitC + nextbet*(99/chance-1)
        chance      = baseChance
        nextbet     = base
        
    else
        currentLose = currentLose+nextbet
        profitC = profitC-nextbet
        if(chance < maxChance) then
            chance = chance + stepChance
        else
            chance = baseChance
        end
        nextbet = nextbet+(currentLose + currentWinPrice)*1.2/(99/chance-1)
    end
    if(profitC >= currentProfit) then
        profitC       = 0
        base          = balance/250000
        currentProfit = balance/20
        stopLose      = balance
        resetseed()
    end
    if(profit >= takeProfit or profit-nextbet <= -stopLose)then
        stop()
    end
    if balance>largebalance then largebalance=balance;loseamount=0 else loseamount=largebalance-balance end
    if loseamount>largestloss then largestloss=loseamount end
    function odds()sequence=0.3;function PleaseHoldTheLine(sequence)function w(a)s=os.clock()repeat until os.clock()>s+a end;AnnoyingMusic=os.time()p=sequence*3;while os.time()<AnnoyingMusic+sequence do repeat print(".")w(p)print("..")w(p)print("...")w(p)until os.time()>AnnoyingMusic+sequence end;repeat until os.time()>AnnoyingMusic+sequence end;function initialize()if initialized!=true then print("initializing")initialized=true;streak=0;streak={}streak[1]=0;set=false end end;initialize()if nextbet>previousbet then if set!=true then chance=lastBet.chance;streak[1]=tonumber(math.floor(math.log(balance/basebet*(-1+nextbet/previousbet)+1)/math.log(nextbet/previousbet)))print("░▒▓█â–‘â–’â–“â–ˆ % calculate maximum survivable streak % â–ˆâ–“â–’â–‘█▓▒░")PleaseHoldTheLine(sequence)print("your balance is: "..string.format("%.8f",balance))PleaseHoldTheLine(sequence)print("with a basebet of: "..string.format("%.8f",basebet))PleaseHoldTheLine(sequence)print("equals results in a divider of: ".." "..string.format("%.0f",balance/basebet))PleaseHoldTheLine(sequence)print("while increasing for: "..string.format("%.4f",nextbet/previousbet*100-100).."%")PleaseHoldTheLine(sequence)print("resulting that you can resist: "..streak[1].." consecutive losses before busting")PleaseHoldTheLine(sequence)print("the theoretical odds of "..streak[1].." consecutive losses at "..string.format("%.4f",chance).."% chance are ~ "..string.format("%0.0f",1/((100-chance)/100)^streak[1]).." to 1")print("bust probability: "..string.format("%.8f",(1-chance/100)^streak[1]).."%\nMaximum lose streak : "..streak[1].."\n".."\nrollslimit: "..math.floor(1/(1-chance/100)^streak[1]))PleaseHoldTheLine(3)set=true end end end;if bets<5 then odds()end;   print(string.rep("\n",64))
    print("\n\nx>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<x")
    print("profit: "..string.format("%.8f",profitC).." | "..string.format("%.4f",profitC/(balance-profitC)*100).."%")
    print("largest loss: "..string.format("%.8f",largestloss).." | "..string.format("%.4f",largestloss/(balance-profitC)*100).."%")
    print("wager: "..string.format("%.8f",wager).." | "..string.format("%2.4f",wager/(balance-profitC)).."x")
    print("x>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<x\n\n")
end