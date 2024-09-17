input_list=list(map(int,input().split()))
list_length=len(input_list)
i=0
max_difference=0
min_difference=100
while i<list_length:
    j=i+1
    while j<list_length-1:
        difference=abs(input_list[i]-input_list[j])
        if max_difference<difference:
            max_difference=difference
        if min_difference>difference:
            min_difference=difference
        j+=1
    i+=1
print(min_difference,max_difference)
        