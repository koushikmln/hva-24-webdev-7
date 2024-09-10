num=list(map(int,input().split()))
length=len(num)
i=0
count=0
while i<length:
    if(num[i]>0):
        count+=1
    else:
        print(count)
        break
    i+=1