arr=list(map(int,input().split()))
n=int(input())
sum=0
i=0
# a=[]
while i<len(arr):
    sum=sum+arr[i]
    # a.append(arr[i])
    if sum==n:
        print(arr[i])
    elif sum>n:
    i+=1