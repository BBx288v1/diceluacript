
chance = 990000000
mul = 98000
while mul >= 100:
    if((chance/mul)%100==0):
        #print(str(chance/mul/10000)+" -- "+str(mul/1000))
        print(str(chance/mul/10000))
        #print(str(mul/1000))
    mul -= 10