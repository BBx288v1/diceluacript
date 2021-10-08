
baseChance     = 66.0000
chance         = baseChance
payout         = 1.5
base           = 0.1
betsleep       = 0.0001
nextbet        = base
prebet         = base
loseStreak     = 0
winStreak      = 0
sleep          = 0
check          = 1
minChanceSleep = payout
maxChanceSleep = payout+2
noBet          = 0
betArr         = {base, base, base, base, base, base, base, base, base, base}
math.randomseed(os.time())
function dobet()
    if win then        
        loseStreak = 0
        if(sleep == 0) then
            winStreak += 1
            if(nextbet*payout < base * 2) then
                nextbet   = nextbet*payout
                betArr[noBet] = nextbet
            else
                nextbet = base
                betArr[noBet] = nextbet
            end
        end
        if(sleep > 0) then
            sleep -= 1
            if(sleep == 0)then
                chance  = baseChance
            end
        end
    else
        winStreak = 0
        loseStreak += 1
        if(sleep == 0) then
            nextbet = nextbet * (1/(payout-1)+1)
            betArr[noBet] = nextbet
        end
        if (loseStreak == 1) then
            sleep      = math.random() and math.random() and math.random() and math.random(1, 3)
            nextbet    = betsleep
            chance     = 49.5
            loseStreak = 0
        end
    end
    if(sleep == 0) then
        noBet = math.random() and math.random() and math.random() and math.random(0, 9)
        nextbet = betArr[noBet]
    end
    print("Bet Array:")
    for i = 0, 9 do
        print(betArr[i])
    end
end