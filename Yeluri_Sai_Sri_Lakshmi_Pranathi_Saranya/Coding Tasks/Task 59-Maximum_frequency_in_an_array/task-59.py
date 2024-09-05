arr=list(map(int,input().split()))
freq=[]
n=len(arr)
for i in range(0,n):
    p=1
    if i==n-1:
        freq.append(p)
    else:
        for j in range(i+1,n):
            if arr[i]==arr[j]:
                p+=1
        freq.append(p)
print(arr[freq.index(max(freq))])