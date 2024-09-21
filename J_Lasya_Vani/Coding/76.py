s=input()
w=input()
l=s.split()
p=0
for i in l:
    if i==w:
        p=1
        print("Yes")
if p==0:
    print("No")