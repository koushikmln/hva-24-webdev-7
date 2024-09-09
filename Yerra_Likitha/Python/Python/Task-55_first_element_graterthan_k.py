arr=list(map(int,input().split()))
k=int(input())
i=0
while i<len(arr)-1:
    if k<arr[i]:
        print(arr[i])
        break
    i+=1
else:
    print("No")
    