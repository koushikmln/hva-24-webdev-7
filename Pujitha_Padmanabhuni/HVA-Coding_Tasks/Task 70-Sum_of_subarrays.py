a=list(map(int,input().split()))
s=0
n=len(a)
for i in range(n):
    for j in range(i,n):
        for k in range(i,j+1):
            s+=a[k]
print(s)