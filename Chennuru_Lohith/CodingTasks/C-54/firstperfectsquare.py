arr=[3,6,7,4,6,9,1,23]

def perfSquares(n):
    perfectSquares=[]
    i=0
    while(i<n):
        perfectSquares.append(i*i)
        i=i+1
    return perfectSquares


perfectsquare=0
found=0
i=0   
while(i<len(arr)):
    if arr[i] in perfSquares(arr[i]):
        found=1
        perfectsquare=arr[i]
        break
    i+=1

if found==1:
    print(perfectsquare)
else:
    print("No")
