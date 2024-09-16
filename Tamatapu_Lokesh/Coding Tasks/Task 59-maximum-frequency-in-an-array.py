input_list=list(map(int,input().split()))
list_length=len(input_list)
i=0
j=0
count=1
max=0
while i<list_length:
    j=i+1
    while j<list_length-1:
        if input_list[i]==input_list[j]:
            count+=1
        j+=1
    if max<count:
        max=count
        temp=input_list[i]
    count=1
    i+=1
print(temp)




