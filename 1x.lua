
baseChance     = 73.3333
chance         = baseChance
payout         = 1.35
multiplier     = 4
base           = 0.1
betleep        = 0.001
nextbet        = base
prebet         = 0.001
betBackUp      = base
loseStreak     = 0
maxLoseStreak  = 56
winStreak      = 0
maxWinStreak   = 3
sleep          = 0
minChanceSleep = 1.4
maxChanceSleep = 5
math.randomseed(os.time())
function dobet()
    if win then        
        loseStreak = 0
        if(sleep > 0) then
            sleep -= 1
            chance    = baseChance
            nextbet   = betBackUp
            winStreak = 2
        else
            winStreak += 1
            if(winStreak < maxWinStreak) then
                nextbet = nextbet*payout
            else
                nextbet = base
                winStreak = 0
            end
            betBackUp = nextbet
        end
        
    else
        winStreak = 0
        loseStreak += 1
        if (sleep == 0) then
            betBackUp = betBackUp * multiplier
            sleep     = 1
            nextbet   = betleep
            chance    = 99/((math.random() and math.random() and math.random() and math.random(minChanceSleep*100, maxChanceSleep*100))/100)
        end
    end
end