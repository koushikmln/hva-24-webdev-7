lst=[10, 5, 6, 3, 4, 3, 5, 6]
min_num=lst[0]
i=0
while(i<len(lst)):
    if lst[i]<min_num:
        min_num=lst[i]
    i+=1
print(min_num)
          
