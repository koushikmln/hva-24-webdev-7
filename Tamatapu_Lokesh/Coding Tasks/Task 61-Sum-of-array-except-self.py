input_list=list(map(int,input().split()))#single line input as a list
list_length=len(input_list)
i=0
while i<list_length:
    j=0
    sum=0
    while j<list_length:
        if j!=i:
            sum+=input_list[j]
        j+=1
    print(sum,end=" ")
    i+=1

