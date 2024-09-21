arr=[17,1,13,1,17]
reverArr=[]
i=len(arr)-1
while i>=0:
    reverArr.append(arr[i])
    i-=1
print(reverArr)

if arr==reverArr:
    print("Yes")
else:
    print("No")
