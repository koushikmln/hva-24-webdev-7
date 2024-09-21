n=int(input())
l1=list(map(int,input().split()))
l2=list(map(int,input().split()))
rep=[]
for i in l1:
    if i in rep:
        break
    for j in l2:
        if i==j:
            rep.append(i)
            break
if len(rep)!=0:
    print(*rep)
else:
    print("No")
            