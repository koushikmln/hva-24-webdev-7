lst=[4, 7, 9, 10, 7, 14, 7,12, 4, 7, 27]
num=7
num_count=0
i=0
while(i<len(lst)):
    if num==lst[i]:
        num_count+=1
    i+=1
print(num_count)
        
