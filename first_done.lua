
chance     = 49.5
multiplier = 2
baseBase   = 0.000002
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
end