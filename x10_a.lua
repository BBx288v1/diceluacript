
baseChance = 73.3333
changeChance = 22.0000
chance     = baseChance
multiplier = 1.35
base       = 0.1
nextbet    = base
prebet     = 0.00000001
loseStreak = 0
maxLoseStreak = 56
winStreak  = 0

function dobet()
    if win then
        winStreak += 1
        loseStreak = 0
        if(chance == changeChance) then
            chance = baseChance
        end
        nextbet = base        
    else
        winStreak = 0
        loseStreak += 1
        if (loseStreak >= maxLoseStreak) then
            nextbet = nextbet * (changeChance/baseChance)
            chance = changeChance
        else
            nextbet = nextbet * multiplier
        end
    end
end