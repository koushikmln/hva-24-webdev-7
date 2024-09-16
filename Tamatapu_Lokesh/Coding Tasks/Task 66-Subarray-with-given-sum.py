input_list=list(map(int,input().split()))
list_length=len(input_list)
target_number=int(input())
i=0
answer=False
while i<list_length:
    j=i
    sum=0
    while j<list_length:
        sum+=input_list[j]
        if sum==target_number:
            k=i
            while k<=j:
                answer=True
                print(input_list[k],end=" ")
                k+=1
        else:
            if sum>target_number:
                break
        j+=1
    i+=1
if answer==False:
    print("Not Possible")
