num=list(map(int,input().split()))
length=len(num)
i=0
answer = False
while i<length:
    if num[i]<0:
        answer = True
        break
    i+=1

if answer:
    print("Yes")
else:
    print("No")
