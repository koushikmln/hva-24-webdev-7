arr=list(map(int,input().split()))
sum=0
for i in arr:
    sum+=i
for i in arr:
    print(sum-i,end=" ")
