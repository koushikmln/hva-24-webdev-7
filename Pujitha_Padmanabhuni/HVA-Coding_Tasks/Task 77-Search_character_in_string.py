s=input()
c=input()
flag=0
for i in s:
    if i==c:
        print("Yes")
        flag=1
        break
if flag==0:
    print("No")
