l=[10,5,6,3,0,4,3,5,6]
s=0
for i in l:
    if i!=0:
        s+=i
    elif i==0:
        break
print(s)