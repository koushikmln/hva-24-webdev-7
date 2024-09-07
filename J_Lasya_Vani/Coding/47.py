l=[10,5,6,3,4,3,5,6]
min=l[0]
for i in l:
    if i<min:
        min=i
print(l.index(min)+1)
