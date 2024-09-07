n=int(input())
a=list(map(int,input().split()))
s=a=list(map(int,input().split()))
vis=[0]*n
c=0
for i in range(n):
    for j in range(n):
        if a[i]==s[j] and vis[j]==0:
            print(a[i],i,j,a[i],s[j])
            vis[j]=1
            c=1
            break
if c==0:
    print("No")