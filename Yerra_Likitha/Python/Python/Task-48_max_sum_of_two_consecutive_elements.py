# n=[3,6,2,1,8,2,5,7,1]
n=list(map(int,input().split()))
m=len(n)
sum=n[m-2]+n[m-3]
print(sum)