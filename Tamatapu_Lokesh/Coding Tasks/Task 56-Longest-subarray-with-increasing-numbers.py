input_list=list(map(int,input().split()))
length=len(input)
i=0
max_count=0
count=0
while i<length-1:
    if input_list[i]<=input_list[i+1]:
        count+=1
    else:
        if max_count<count:
         max_count=count
        count=0
    i+=1
if max_count<count:
    max_count=count   
print(max_count+1)