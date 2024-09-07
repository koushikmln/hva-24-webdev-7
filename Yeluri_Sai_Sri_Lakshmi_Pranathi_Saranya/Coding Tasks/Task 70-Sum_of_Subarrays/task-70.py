arr=list(map(int,input().split()))
p=0
n=len(arr)
sum=0
for i in range(0,len(arr)):
    j=i
    while j!=n:
        for k in range(p,j+1):
            sum+=arr[k]
        j+=1
    p+=1
print(sum)