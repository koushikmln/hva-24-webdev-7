n=int(input())
a=list(map(int,input().split()))
b=list(map(int,input().split()))
i=0
c=0
l=[]
num=[]
while i<n:
    j=0
    while j<n:
        if a[i]==a[j]:
            c+=1
            num.append(a[i])
        j+=1
        l.append(c)
    i+=1
    print(num)
    print(l)

