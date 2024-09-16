input_list=list(map(int,input().split()))
list_length=len(input_list)
i=0
while i<list_length:
    j=i+1
    count=1
    if input_list[i]!=0:
        while j<list_length:
          if input_list[i]==input_list[j]:
            count+=1
            input_list[j]=0
          j+=1
        print(input_list[i],count)
    i+=1

