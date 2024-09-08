a=list(map(int,input().split()))
target=int(input())
n=len(a)
flag=0

i=0
while i<n:
    j=i
    s=0
    while j<n:
        s+=a[j]
        if s>target:
            break
        elif s==target:
            flag=1
            for k in range(i,j+1):
                print(a[k],end=" ")
            break
        j+=1
    i+=1

if flag==0:
    print("Not possible")