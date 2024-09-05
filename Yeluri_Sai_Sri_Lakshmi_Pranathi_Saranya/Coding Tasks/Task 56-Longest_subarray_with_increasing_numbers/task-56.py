arr=list(map(int,input().split()))
n=0
a=[]
for i in range(0,len(arr)-1):
    if arr[i]<=arr[i+1]:
        n+=1
    else:
        a.append(n)
        n=0
print(max(a)+1)
