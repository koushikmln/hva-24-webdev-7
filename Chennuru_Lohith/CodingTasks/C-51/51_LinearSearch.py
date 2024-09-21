arr=[11,1,13,21,3,7]
search=int(input())
found=0
i=0
while(i<len(arr)):
    if search==arr[i]:
        found=1
        break
    i+=1
    
if found==1:
    print("Yes")
else:
    print("No")
        
      
