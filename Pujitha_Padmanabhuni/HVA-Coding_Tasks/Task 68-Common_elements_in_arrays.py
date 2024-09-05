n=int(input())
a=list(map(int,input().split()))
b=list(map(int,input().split()))
res=[]
for i in a:
    if i not in res and i in b:
        res.append(i)
if res:
    for i in res:
        print(i,end=" ")
else:
    print("No")