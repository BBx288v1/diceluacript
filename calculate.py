import math
chance = 990000000
mul = 98000
count = 0
listChance,listPayout,listMultiply,listDivBalance = "","","", ""
while mul >= 100:
    if(math.floor(chance/mul)%100==0):
        fillChance = mul/1000
        fillPayout = chance/mul/10000
        til = 1
        step = 0.0001
        multiplier = round(1/(fillPayout-1)+til+0.00005,4)
        total = ((multiplier**(round(fillPayout*4)))-1)/(multiplier-1)
        divBalance = int(round(((multiplier**(round(fillPayout+0.01)*3))-1)/(multiplier-1)+0.5))
        if fillPayout >=4 and fillPayout <= 10:
            count += 1
            #while ((round(1/(fillPayout-1)+til+step,4)**(round(fillPayout*4)))-1)/(round(1/(fillPayout-1)+til+step,4)-1) < 2000 :
                #til += step
                #multiplier = round(1/(fillPayout-1)+til,4)
                #total = ((multiplier**(round(fillPayout*4)))-1)/(multiplier-1)
            print("chance%d = %.2f; payout%d = %.2f; multiply%d = %.4f; divBalance%d = %d" %(count, fillChance, count, fillPayout, count, multiplier, count, divBalance))
            listChance += "chance%d," %(count)
            listPayout += "payout%d," %(count)
            listMultiply += "multiply%d," %(count)
            listDivBalance += "divBalance%d," %(count)
            
        
            #print(str(chance/mul/10000)+" -- "+str(mul/1000))
            #print(str(round((chance/mul)/10000,2)))
    mul -= 10
print("listChance = {" + listChance[:len(listChance)-1]+"}")
print("listPayout = {" + listPayout[:len(listPayout)-1]+"}")
print("listMultiply = {" + listMultiply[:len(listMultiply)-1]+"}")
print("listDivBalance = {" + listDivBalance[:len(listDivBalance)-1]+"}")