num=list(map(int,input().split()))
length=len(num)
i=0
answer=True
while i<length-1: 
   if num[i]>num[i+1]:
      answer=False
      break
   i+=1
if answer:
   print("Yes")
else:
   print("No")