arr=[10,5,6,3,0,4,3,5,6]
sum=0
i=0
while(i<len(arr)):
    if(arr[i]==0):
        break
    sum=sum+arr[i]
    i+=1
print(sum)
        
    
