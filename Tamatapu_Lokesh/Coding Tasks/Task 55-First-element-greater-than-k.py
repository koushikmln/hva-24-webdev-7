num=list(map(int,input().split()))
K=int(input())
length=len(num)
i=0
answer=False
while i<length:
    if num[i]>K:
        temp=num[i]
        answer=True
        break
    i+=1
if answer:
    print(temp)
else:
    print("No")