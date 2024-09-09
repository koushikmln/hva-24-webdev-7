# n=[10,5,6,3,4,3,5,6]
n=list(map(int,input().split()))
i=0
sum=0
while i<=len(n)-1:
    sum=sum+n[i]
    i+=1
avg=sum/len(n)
print(avg)