# n=[10,5,6,3,4,3,5,6]
n=list(map(int,input().split()))
m=len(n)
i=0
min=n[0]
while i<=m-1:
    if n[i]<min:
        min=n[i]
    i+=1
print(min)
