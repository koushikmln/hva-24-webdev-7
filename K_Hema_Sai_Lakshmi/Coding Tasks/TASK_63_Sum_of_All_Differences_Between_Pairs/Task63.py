a=list(map(int,input().split()))
sum=0
for i in range(len(a)):
    for j in range(i+1,len(a)):
        diff=abs(a[i]-a[j])
        sum=sum+diff
print(sum)