
bet = 1
multi = 2
step = 5
chance = 49
mainChain = 98
currentWinPrice = bet*(multi-1)
currentLose = 0
while chance < 70:
    currentLose += bet
    chance += step
    bet = bet+(currentLose + currentWinPrice)/(99/chance-1)
    print(bet)
