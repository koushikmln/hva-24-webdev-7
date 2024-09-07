arr=list(map(int,input().split()))
p=0
for i in range(0,len(arr)-1):
    for j in range(i+1,len(arr)):
        if arr[i]==arr[j]:
            print(arr[i])
            p=1
            break
    if p==1:
        break
if p==0:
    print("No")