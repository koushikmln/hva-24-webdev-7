lst=[4, 7, 9, 10, 7, 14, 12, 4, 7, 27]
i=0
odd_count=0
while(i<len(lst)):
    if lst[i]%2!=0:
        odd_count+=1
    i+=1
print(odd_count)
