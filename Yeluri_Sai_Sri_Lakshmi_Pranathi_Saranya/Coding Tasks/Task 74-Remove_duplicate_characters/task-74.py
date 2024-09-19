str=input()
dict={}
s=""
for i in str:
    if i in dict:
        pass
    else:
        dict[i]=1
        s=s+i
print(s)        