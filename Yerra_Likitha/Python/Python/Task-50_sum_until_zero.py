# n=[10,5,6,3,0,4,3,5,6]
n=list(map(int,input().split()))
i=0
sum=0
while i<len(n):
    if n[i]>0:
        sum+=n[i]
        i+=1
    else:
        break
print(sum)