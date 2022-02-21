-- Chance x2
baseChance = 33
-- Chance x1.5
changeChance = 66
-- Giá trị nhân khi thua khi đổi payout thành 1.5
multiplier = 4
-- Giá trị đặt cược khi chờ chuỗi thua
betleep = 0.0000000000
-- Giá trị đặt cược khi thay đổi payout thành 1.5
base = 11
-- Dừng lại khi thắng
takeProfit = 2
-----------------------------------------------
chance            = baseChance
betBackUp         = base
nextbet           = betleep
maxLoseStreak     = 9
sleep             = 7
currentLoseStreak = 0
currentWinStreak  = 0
resetstats()
resetseed()

function dobet()
    if win then        
        loseStreak        = 0
        chance            = baseChance
        nextbet           = betleep
        currentWinStreak  = currentWinStreak + 1
        currentLoseStreak = 0
    else
        currentLoseStreak = currentLoseStreak + 1
        currentWinStreak  = 0
        if (currentLoseStreak == sleep) then
            chance = changeChance
            nextbet = base
        elseif (currentLoseStreak > sleep and currentLoseStreak < maxLoseStreak) then
            nextbet = nextbet * multiplier
        elseif (currentLoseStreak > maxLoseStreak) then
            currentLoseStreak = 0
            chance            = baseChance
            nextbet           = betleep
        end
    end
    if(profit >= takeProfit)then
        stop()
    end
end