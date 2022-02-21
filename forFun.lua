--
baseBet = 0.001
--
multi = 2
chanceMain = 90
chanceChange = 49.5
chance = chanceMain
nextbet = baseBet

function hiloChange()
    if(bethigh == true)then
        bethigh = false
    else
        bethigh = true
    end
end

function dobet()
    if(win)then
        chance = chanceMain
        nextbet = baseBet
    else
        if(currentstreak == -1)then
            chance = chanceChange
        elseif(currentstreak < -1)then
            nextbet = nextbet * multi
            hiloChange()
        end
    end
end