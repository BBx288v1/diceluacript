with open("predict.txt") as p:
    data = p.read()
data = '["' + data.replace("\n", '","') + '"]'
with open("result.txt","w") as r:
    r.write(data)