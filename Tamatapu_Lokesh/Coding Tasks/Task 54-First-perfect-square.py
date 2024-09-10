num=list(map(int,input().split()))
length=len(num)
i=0
j=1
count=0
answer=False
while i<length:
    while j<num[i]:
        if num[i]%j==0:
            count+=1
        j+=1
    j=1
    if count%2==0 or count>2:
        temp=num[i]
        answer=True
    i+=1
if answer:
    print(temp)
else:
    print("No")