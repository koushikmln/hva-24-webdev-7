a=list(map(int,input().split()))
n=int(input())
c=0
for i in range(len(a)):
    s=a[i]
    for j in range(i+1,len(a)):
        s=s+a[j]
        if s==n:
            print(i,j)
            c=1
        if s>n:
            break
if c==0:
    print("Not Possible")