s=input()
s=s.lower()
vowels={'a','e','i','o','u'}
v=0
c=0 
for i in s:
    if i.isalpha():
        if i in vowels:
            v=v+1
        else:
            c=c+1
print(v,c)