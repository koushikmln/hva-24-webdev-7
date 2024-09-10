a=list(map(int,input().split()))
total_sum=0
for i in range(len(a)):
    subarray_sum=0
    for j in range(i,len(a)):
        subarray_sum+=a[j]
        total_sum+=subarray_sum
print(total_sum)