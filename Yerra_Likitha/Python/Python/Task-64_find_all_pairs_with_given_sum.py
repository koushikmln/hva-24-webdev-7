# a=[4,6,7,2,8,9,3,10]
a=list(map(int,input().split()))
n=10
for i in range(len(a)):
    for j in range(i+1,len(a)):
        if a[i]+a[j]==10:
            print(a[i],a[j])
    