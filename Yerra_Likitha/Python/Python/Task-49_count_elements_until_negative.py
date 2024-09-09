# n=[10,5,6,3,-1,4,-3,5,6]
n=list(map(int,input().split()))
i=0
c=0
while i<len(n):
    if n[i]>0:
        c+=1
        i+=1
    else:
        break
print(c)