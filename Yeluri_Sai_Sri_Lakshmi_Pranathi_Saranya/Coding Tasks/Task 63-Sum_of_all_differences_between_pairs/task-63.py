arr=list(map(int,input().split()))
sum=0
for i in range(0,len(arr)-1):
    for j in range(i+1,len(arr)):
        sum+=abs(arr[i]-arr[j])
print(sum)