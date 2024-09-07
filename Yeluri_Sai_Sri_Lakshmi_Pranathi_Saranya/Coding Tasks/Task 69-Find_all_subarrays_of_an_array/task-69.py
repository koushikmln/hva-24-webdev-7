arr=list(map(int,input().split()))
p=0
n=len(arr)
for i in range(0,len(arr)):
    j=i
    while j!=n:
        for k in range(p,j+1):
            print(arr[k],end=' ')
        print()
        j+=1
    p+=1