multiplier = 2
chance     = 99/multiplier
baseBase   = 0.000002
base       = baseBase
base2       = baseBase
nextbet    = base
maxBetChange = baseBase*64
prebet     = 0.00000001
loseStreak = 0
winStreak  = 0
mutiafter  = 4
afterMulti = 4
wining     = 0
resetWin   = 4
mode = 1
maxProfit=0
profit=0

function dobet()
    if win then
        profit+=nextbet*(multiplier-1)
        if(profit > maxProfit) then
            maxProfit=profit
            if(base2 > baseBase) then
                base2=baseBase
            end
        end
        winStreak += 1
        loseStreak = 0
        wining += 1
        if(wining == resetWin and base > base2) then
            base = base/afterMulti
            wining = 0
            winStreak = 0
        end
        nextbet = base        
    else
        profit -= nextbet
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
        if (nextbet > maxBetChange*(baseBase/base2)) then
            if(base < maxBetChange) then
                wining = 0
                winStreak = 0
                loseStreak = 0
                base2 = base2*2
                base = base2
                nextbet = base
            end
        end      
    end
    -- if(wins%30 == 0 and wins < 100) then
    --     if (losses - wins < 0) then
    --         stop()
    --     end
    -- end
    -- if(wins%100==0) then
    --     if (losses - wins < wins/15) then
    --         stop()
    --     end
    --     if (losses - wins < 0) then
    --         stop()
    --     end
    -- end
    -- if(wins >= 600) then
    --     if (losses - wins < 40) then
    --         stop()
    --     end
    -- end
end