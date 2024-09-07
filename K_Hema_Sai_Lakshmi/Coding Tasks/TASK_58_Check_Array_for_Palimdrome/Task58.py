a=list(map(int,input().split()))
s=[]
for i in range(len(a)-1,-1,-1):
    s.append(a[i])
if s==a:
    print("Yes")
else:
    print("No")    