n=list(map(int,input().split()))
m=list(map(int,input().split()))
i=0
j=0
while i<len(n) and j<len(m):
    if n[i]==m[j]:
        i+=1
        j+=1
    else:
        j=0
        i+=1
if j==len(m):
    print("yes")
else:
    print("no")
