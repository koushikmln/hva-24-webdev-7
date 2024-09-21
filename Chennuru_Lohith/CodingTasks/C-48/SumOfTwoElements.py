arr=[3,6,2,1,8,2,5,7,1]
subsum=0
maxsum=0

i=0
while(i<len(arr)-1):
    subsum=arr[i]+arr[i+1]
    if maxsum < subsum:
        maxsum=subsum
        
    i+=1
    
print(maxsum)
