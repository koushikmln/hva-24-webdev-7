lists_lengths=int(input())
input_list1= list(map(int, input().split()))
input_list2 = list(map(int, input().split()))
i=0
while i<lists_lengths:
    j=0
    while j<lists_lengths:
        if input_list1[i]==input_list2[j]:
            input_list2[j]=0
            print(input_list1[i],end=" ")
        else:
            answer=False
        j+=1
    i+=1
if answer==False:
    print("No")
