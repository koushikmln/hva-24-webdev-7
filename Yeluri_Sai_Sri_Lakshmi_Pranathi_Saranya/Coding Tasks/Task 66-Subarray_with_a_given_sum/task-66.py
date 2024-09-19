arr=list(map(int,input().split()))
target=int(input())
sum=0
p=0
for i in arr:
    sum+=i
arrsum=0
for i in range(0,len(arr)):
    arrsum+=arr[i]
    if sum-arrsum==target:
        p=1
        break
if p==1:
    for j in range(i+1,len(arr)):
        print(arr[j],end=" ")
for i in range(len(arr)-1,-1,-1):
    arrsum+=arr[i]
    if sum-arrsum==target:
        p=2
        break
if p==2:
    for j in range(0,i+1):
        print(arr[j],end=" ")
if p==0:
    print("Not Possible")