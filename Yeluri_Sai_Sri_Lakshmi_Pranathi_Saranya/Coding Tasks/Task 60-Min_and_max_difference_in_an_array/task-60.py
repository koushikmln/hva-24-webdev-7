arr=list(map(int,input().split()))
arr.sort()
diff=arr[1]-arr[0]
for i in range(1,len(arr)-1):
    if arr[i+1]-arr[i]<diff:
        diff=arr[i+1]-arr[i]
print(diff,end=" ")
print(arr[-1]-arr[0])