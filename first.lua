
chance     = 49.5
multiplier = 2
baseBase   = 0.1
base       = baseBase
nextbet    = base
prebet     = 0.00000001
loseStreak = 0
winStreak  = 0
mutiafter  = 4
afterMulti = 4
wining     = 0
resetWin   = 4

function dobet()
    if win then
        winStreak += 1
        loseStreak = 0
        wining += 1
        if(wining == resetWin and base > baseBase) then
            base = base/afterMulti
            wining = 0
            winStreak = 0
        end
        nextbet = base        
    else
        winStreak = 0
        loseStreak += 1
        if (loseStreak >= mutiafter) then
            wining = 0
            winStreak = 0
            loseStreak = 0
            base = base*afterMulti
            nextbet = base
        else
            nextbet = nextbet * multiplier
        end
    end
    if(wins%30 == 0 and wins < 100) then
        if (losses - wins < 0) then
            stop()
        end
    end
    if(wins%100==0) then
        if (losses - wins < wins/15) then
            stop()
        end
        if (losses - wins < 0) then
            stop()
        end
    end
    if(wins >= 600) then
        if (losses - wins < 40) then
            stop()
        end
    end
end