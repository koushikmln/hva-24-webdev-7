# a=list(map(int,input().split()))
a=[5,4,7,8,4,6,11,9]
max_diff=float('-inf')
min_diff=float('inf')
for i in range(len(a)):
    for j in range(i+1,len(a)):
        diff=abs(a[i]-a[j])
        
        if max_diff<diff:
            max_diff=diff
        if min_diff>diff:
            min_diff=diff
print(min_diff,max_diff)