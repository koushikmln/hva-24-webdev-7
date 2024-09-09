arr=list(map(int,input().split()))
arr.sort()
a=max(arr)
b=min(arr)
i=0
if arr[i+1]==arr[i]:
    print(arr[i+1]-arr[i])
print(a-b)