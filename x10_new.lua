
baseChance = 9.9000
chance     = baseChance
payout     = 10
smallBet   = 0.00000001
bigBet     = 0.000003


bet1    = smallBet
bet2    = bigBet
bet3    = bigBet
bet4    = bigBet
nextbet = bet2
noBet   = 2

loseStreak    = 0
winStreak     = 0
timeRun       = 0
maxLoseStreak = 30

function dobet()
    timeRun+=1
    if win then
        winStreak += 1
        loseStreak = 0
        if(noBet == 1) then
            bet1 = smallBet
        elseif(noBet == 2) then
            bet2 = bigBet
        elseif(noBet == 3) then
            bet3 = bigBet
        elseif(noBet == 4) then
            bet4 = bigBet
        end
        nextbet = bet2
        noBet   = 2
    else
        winStreak = 0
        loseStreak += 1
        if(noBet == 1) then
            bet1 = nextbet * (1/(payout-1)+1.0001)
        elseif(noBet == 2) then
            bet2 = nextbet * (1/(payout-1)+1.0001)
        elseif(noBet == 3) then
            bet3 = nextbet * (1/(payout-1)+1.0001)
        elseif(noBet == 4) then
            bet4 = nextbet * (1/(payout-1)+1.0001)
        end
        if(loseStreak >= 30) then
            loseStreak = 0
            if(bethigh==true)then
                bethigh = false
            else
                bethigh = true
            end
        end
        if(loseStreak >= 0 and loseStreak < 3) then
            nextbet = bet2
            noBet = 2
        elseif(loseStreak >= 8 and loseStreak < 10) then
            nextbet = bet3
            noBet = 3
        elseif(loseStreak >= 12 and loseStreak < 15) then
            nextbet = bet4
            noBet = 4
        else
            nextbet=bet1
            noBet = 1
        end
    end
    print("Lose streak: "..string.format("%d",loseStreak))
    print("Next Bet: "..string.format("%.8f",nextbet))
    print("Bet Array: "..string.format("%.8f, %.8f, %.8f, %.8f",bet1,bet2,bet3,bet4))
    if(timeRun == 3000)then
        resetseed()
        timeRun = 0
    end
end