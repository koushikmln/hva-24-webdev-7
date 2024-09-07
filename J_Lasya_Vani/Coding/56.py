l=list(map(int,input().split()))
s=1
i=1
maxx=1
while i<len(l):
    if l[i]>l[i-1]:
        s+=1
    else:
        maxx=max(maxx,s)
        s=1
    i+=1
maxx=max(maxx,s)
print(maxx)

        
