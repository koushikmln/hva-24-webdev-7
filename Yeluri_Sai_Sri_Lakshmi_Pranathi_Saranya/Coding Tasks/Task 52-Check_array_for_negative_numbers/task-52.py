arr=list(map(int,input().split()))
for i in arr:
    if i<0:
        print("Yes")
        break
if i==arr[len(arr)-1] and i>=0:
    print("No")

