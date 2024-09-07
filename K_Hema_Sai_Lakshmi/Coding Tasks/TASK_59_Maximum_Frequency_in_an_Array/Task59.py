a=list(map(int,input().split()))
d={}
for i in a:
    if i in d:
        d[i]+=1
    else:
        d[i]=1
freq=0
for k, v in d.items():
    if v > freq:
        freq = v
        element = k
print(element)


