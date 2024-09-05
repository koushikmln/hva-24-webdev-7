arr=list(map(int,input().split()))
p=0
for i in range(0,len(arr)-1):
    if arr[i]>arr[i+1]:
        print("No")
        p=1
        break
if p==0:
    print("Yes")