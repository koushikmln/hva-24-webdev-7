arr1=list(map(int,input().split()))
arr2=list(map(int,input().split()))
j=0
for i in range(0,len(arr1)):
    if arr1[i]==arr2[j]:
        j+=1
        if j==len(arr2)-1:
            if arr2[j]!=arr1[i+1]:
                j=0
                break
    else:
        j=0
if j==0:
    print("No")
else:
    print("Yes")
    

