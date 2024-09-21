arr=[11,1,13,21,3,7]
neg=0
i=0
while(i<len(arr)):
    if arr[i]<0:
        neg+=1
    i+=1
if neg==0:
    print("No")
else:
    print("Yes")
    
    
