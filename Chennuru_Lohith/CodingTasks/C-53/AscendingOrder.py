arr=[3,5,10,13,16,12,14]
asc=[]
i=0
j=0
while(i<len(arr)-1):
    if arr[i]<arr[i+1]:
        asc.append(arr[i])
        
    i+=1
print(asc)
k=0
while(k<len(arr)-1):
    if arr[k]==asc[k]:
        print("Yes")
    else:
        print("No")
    k+=1
