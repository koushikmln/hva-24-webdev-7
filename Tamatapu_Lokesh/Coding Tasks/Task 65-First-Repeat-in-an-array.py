input_list=list(map(int,input().split()))
list_length=len(input_list)
i=0
answer=False
while i<list_length:
    j=i+1
    while j<list_length:
        if input_list[i]==input_list[j]:
            answer=True
        j+=1
    if answer==True:
        print(input_list[i])
        break
    i+=1
if answer==False:
    print("No")


        