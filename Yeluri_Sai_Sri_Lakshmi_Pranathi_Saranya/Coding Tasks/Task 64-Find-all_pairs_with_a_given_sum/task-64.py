arr=list(map(int,input().split()))
num=int(input())
for i in range(0,len(arr)-1):
    for j in range(i+1,len(arr)):
        if arr[i]+arr[j]==num:
            print(arr[i]," ",arr[j])