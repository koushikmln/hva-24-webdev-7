a=list(map(int,input().split()))
b=list(map(int,input().split()))
i=0
j=0
while i<len(a) and j<len(b):
    if a[i]==a[j]:
        i+=1
        j+=1
    else:
        j=0
        i+=1
if j==len(b):
    print("yes")
else:
    print("no")