# n=[3,2,5,1,4]
n=list(map(int,input().split()))
product=1
i=0
while i<=len(n)-1:
    product=product*n[i]
    i+=1
print(product)