str=input()
char=input()
p=0
for i in str:
    if i==char:
        print("yes")
        p=1
        break
if p==0:
    print("No")