l=[10,5,6,3,-1,4,-3,5,6]
c=0
for i in l:
    if i>0:
        c+=1
    elif i<0:
        break
print(c)