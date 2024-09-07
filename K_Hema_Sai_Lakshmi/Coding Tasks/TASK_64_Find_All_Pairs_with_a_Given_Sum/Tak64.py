a=list(map(int,input().split()))
n=int(input())
for i in range(len(a)):
    for j in range(i+1,len(a)):
        if a[i]+a[j]==n:
            print(a[i],a[j])