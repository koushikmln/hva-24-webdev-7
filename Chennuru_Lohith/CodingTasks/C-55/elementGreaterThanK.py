arr=[3,5,10,25,16,12,14]
K=int(input())

found=0
i=0
while(i<len(arr)):
    if arr[i]>K:
        found=arr[i]
        break
    i+=1

if(found>0):
    print(found)
else:
    print("No")
    
