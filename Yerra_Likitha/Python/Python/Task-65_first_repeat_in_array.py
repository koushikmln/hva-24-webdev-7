arr=list(map(int,input().split()))
i=0.0
while i<len(arr):
    for j in range(i+1,len(arr)):
        if arr[i]==arr[j]:
            print(arr[i])
            exit()
    i+=1