str=input()
str2=""
index=int(input())
for i in range(0,len(str)):
    if i!=index:
        str2+=str[i]
    else:
        str2+=str[i].upper()
print(str2)