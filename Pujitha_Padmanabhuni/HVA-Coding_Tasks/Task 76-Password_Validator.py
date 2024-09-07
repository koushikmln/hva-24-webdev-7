s=input()
n=len(s)
l=False
u=False
num=False
spl=False
if n<8:
    print("No")
else:
    for i in s:
        if i.isupper():
            u=True
        elif i.islower():
            l=True
        elif i.isdigit():
            num=True
        elif not(i.isalpha() or i.isdigit() or i==' '):
            spl=True
    if l and u and num and spl:
        print("Yes")
    else:
        print("No")
