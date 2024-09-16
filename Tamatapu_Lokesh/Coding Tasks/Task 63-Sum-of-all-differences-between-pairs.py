input_list=list(map(int,input().split()))
list_length=len(input_list)
i=0
sum=0
while i<list_length:
    j=i+1
    while j<list_length:
        sum+=abs(input_list[i]-input_list[j])
        j+=1
    i+=1
print(sum)