s1=input()
s2=input()
s1=s1.lower()
s2=s2.lower()
for i in s1:
    if i.isalpha() and i in s2:
        pass
        
    if i.isalpha() and i not in s2:
        print("No")
        exit()
for j in s2:
    if i.isalpha() and j in s1:
        pass
        
    if i.isalpha() and j not in s1:
        print("No")
        exit()
print("Yes")