num=list(map(int,input().split()))
length=len(num)
i=0
sum=0
while i<length:
    if num[i]!=0:
        sum+=num[i]
    else:
        print(sum)
        break
    i+=1
