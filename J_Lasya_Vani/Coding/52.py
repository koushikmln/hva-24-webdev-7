l=[11,1,13,21,3,7]
i=0
neg=False
while i<len(l):
    if l[i]<0:
        neg=True
        break
    i+=1
if neg:
    print("Yes")
else:
    print("No")
