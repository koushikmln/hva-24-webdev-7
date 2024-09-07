a=list(map(int,input().split()))
s=[]
for i in range(len(a)):
    sum=0
    for j in range(len(a)):
        if i!=j:
            sum=sum+a[j]
    s.append(sum)
print(*s)