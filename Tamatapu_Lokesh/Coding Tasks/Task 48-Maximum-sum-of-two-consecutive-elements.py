num=list(map(int,input().split()))
length=len(num)
i=0
max=0
while i<length-1:
    sum=num[i]+num[i+1]
    if max<sum:
        max=sum
    i+=1
print(max)
