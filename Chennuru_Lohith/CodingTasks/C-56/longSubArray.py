arr=[5,4,4,7,6,3,2,4,6,8,6,3,6,8,5]
lengthofarray=len(longSubArr=[])
i=0
while(i<len(arr)-1):
    if(lengthofarray < arr[i+1]):
        longSubArr.append(arr[i])
        longSubArr.append(arr[i+1])
    i+=1
print(longSubArr)
