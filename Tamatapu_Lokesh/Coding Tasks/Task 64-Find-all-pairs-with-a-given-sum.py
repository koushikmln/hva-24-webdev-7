input_list=list(map(int,input().split()))
list_length=len(input_list)
target_sum=int(input())
i=0
while i<list_length:
    j=i+1
    while j<list_length:
        if input_list[i]+input_list[j]==target_sum:
            print(input_list[i],input_list[j])
        j+=1
    i+=1
    