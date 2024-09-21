l=list(map(int,input().split()))
i=0
while i<=len(l)-1:
    print(sum(l)-l[i],end=" ")
    i+=1