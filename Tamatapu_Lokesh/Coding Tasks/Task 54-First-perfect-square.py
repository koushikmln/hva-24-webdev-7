num=list(map(int,input().split()))
length=len(num)
answer=False

i=0
while i<length:
    j=1
    while j*j<=num[i]:
        if j*j==num[i]:
          answer=True
          temp=num[i]
          break  
        j+=1
    if answer:
            break
    i+=1
if answer:
    print(temp)
else:
    print("No")