
baseChance    = 9.9000;
chance        = baseChance;
payout        = 10;
smallBet      = 0.0000001;
bigBet        = balance/1000;

bet1          = smallBet;
bet2          = bigBet;
nextbet       = bet1;
noBet = 1; 

timeToBig = 10;
timeStopBig = 20;


winStreak     = 0;
loseStreak    = 0;
loseStreakHiLo    = 0;
timeRun       = 0;
timeToRsSeed = 300;
maxLoseStreakHiLo = 30;

takeProfit = balance/10;
stopLost = -balance/5


function dobet(){
    timeRun+=1
    if (win){
        winStreak += 1;
        loseStreak = 0;
    	loseStreakHiLo =0;
        if(noBet == 1)
            bet1 = smallBet;
    	else{
            bet2 = bigBet;
          	resetseed();
        }
        nextbet = bet1;
    	noBet = 1;
    }
    else{
        winStreak = 0;
        loseStreak += 1;
    	loseStreakHiLo += 1;
        if(noBet == 1)
            bet1 = nextbet * (1/(payout-1)+1.01);
        else if(noBet == 2)
            bet2 = nextbet * (1/(payout-1)+1.01);
        if(loseStreakHiLo >= maxLoseStreakHiLo){
      		loseStreakHiLo = 0;
            if(bethigh==true)
                bethigh = false;
            else
                bethigh = true;
        }
        if(loseStreak >= timeToBig && loseStreak <timeStopBig){
            nextbet = bet2;
            noBet = 2;
        }
        else{
            nextbet=bet1;
            noBet = 1;
        }
    }
    //print("Lose streak: "..string.format("%d",loseStreak));
    //print("Next Bet: "..string.format("%.8f",nextbet));
    //print("Bet Array: "..string.format("%.8f, %.8f",bet1,bet2));

    if(profit >= takeProfit){
        bigBet        = balance/1000;
        bet1          = smallBet;
        bet2          = bigBet;
        nextbet       = bet1;
        noBet = 1; 
        winStreak     = 0;
        loseStreak    = 0;
        loseStreakHiLo    = 0;
        timeRun       = 0;
        takeProfit = balance/10;
        stopLost = -balance/8
        resetseed();
        resetstats();
    }
    else if(profit <= stopLost){
        bigBet = bigBet*2
        bet1          = smallBet;
        bet2          = bigBet;
        nextbet       = bet1;
        noBet = 1; 
        winStreak     = 0;
        loseStreak    = 0;
        loseStreakHiLo    = 0;
        timeRun       = 0;
        stopLost = stopLost*2
        resetseed();
    }
}