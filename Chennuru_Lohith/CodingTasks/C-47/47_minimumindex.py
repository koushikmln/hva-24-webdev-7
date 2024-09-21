lst=[10, 5, 6, 3, 4, 3, 5, 6]

print(min_num)

def minIndex(alist):
    
    min_num=alist[0]
    i=0
    while(i<len(alist)):
        if alist[i]<min_num:
            min_num=alist[i]
        i+=1
