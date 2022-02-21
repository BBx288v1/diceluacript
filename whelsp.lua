base = balance/30000
nextbet = base
changeRisk = false
risk = "low" -- low-medium-high
riskRandomizerX = 1
segments = 50 -- 10-20-30-40-50
segmentsRandomizerX = 1
seedRandomizerX = 1
multiMin = 4
multiMax = 3
multi = multiMin
winStreak = 0
loseStreak = 0
winStreakMax = 2
payout = 0
takeprofit = balance * 0.5
stoploss = balance*(-1)

function seedRandomizer()
    seedRandomizerX = math.random(1, 3)
    if (seedRandomizerX == 2) then
        resetseed()
    end
end

function riskRandomizer()
    riskRandomizerX = math.random(1, 4)
    if (riskRandomizerX == 1 and changeRisk == true) then
        risk = "medium"
        multi = multiMax
    else
        risk = "low"
        winStreakMax = math.random(1, 7)
        if(winStreakMax == 1)then
            winStreakMax = 1
            multi = 6
        else
            winStreakMax = math.random(1, 3)
            if(winStreakMax == 1)then
                winStreakMax = 3
                multi = 2.5
            else
                winStreakMax = 2
                multi = 3.5
            end
        end
        
    end
end

function segmentsRandomizer()
    segments = math.random(1, 5)*10
end

function gendWaitStreak()
    waitStreak = math.random(1, 3)
    if (waitStreak <= 1) then
        waitStreak = 0
    elseif (waitStreak <= 2) then
        waitStreak = 3
    elseif (waitStreak <= 3) then
        waitStreak = 7
    end
end

function getPayout()
    payout = math.floor(((currentprofit + previousbet) / previousbet + 0.05)*100)/100
end


function dobet()
    getPayout()
    if (win) then
        winStreak = winStreak + 1
        if(nextbet ~= base)then
            if(risk == "low")then
                if(winStreak >= winStreakMax)then
                    nextbet = base
                    risk = "low"
                    segmentsRandomizer()
                    seedRandomizer()
                else
                    nextbet = previousbet * payout
                end
            else
                nextbet = base
                risk = "low"
                segmentsRandomizer()
                seedRandomizer()
            end
        else
            nextbet = base
            risk = "low"
        end
    else
        winStreak = 0
        if (nextbet == base) then
            riskRandomizer()
        end
        segmentsRandomizer()
        nextbet = previousbet * multi
    end
    if(profit >= takeprofit or profit - nextbet <= stoploss) then
        stop()
    end
end

