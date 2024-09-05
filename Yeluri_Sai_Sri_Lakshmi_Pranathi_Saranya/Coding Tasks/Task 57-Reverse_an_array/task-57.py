arr=list(map(int,input().split()))
arr2=[]
for i in range(len(arr)-1,-1,-1):
    arr2.append(arr[i])
for i in arr2:
    print(i,end=' ')