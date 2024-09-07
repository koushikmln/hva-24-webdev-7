a=list(map(int,input().split()))
s=list(map(int,input().split()))

d=0
for i in range(len(a)):
    d=0
    for j in range(i,len(a)):
        if d>len(s)-1:
            break
        if a[j]==s[d]:
            d=d+1
if d==len(s):
    print("Yes")
else:
    print("No")