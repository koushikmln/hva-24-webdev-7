input_list=list(map(int,input().split()))
list_length=len(input_list)
i=0
while i<list_length//2:
    input_list[i], input_list[list_length - i - 1] = input_list[list_length - i - 1], input_list[i]
    i+=1
j=0
while j<list_length:
    print(input_list[j],end=" ")
    j+=1