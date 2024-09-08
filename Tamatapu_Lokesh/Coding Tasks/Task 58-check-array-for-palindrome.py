input_list=list(map(int,input().split()))
list_length=len(input_list)
i=0
answer=True
while i<list_length:
    if input_list[i]!=input_list[list_length-i-1]:
        answer=False
        break
    else:
        answer=True
    i+=1
if answer:
    print("Yes")
else:
    print("No")