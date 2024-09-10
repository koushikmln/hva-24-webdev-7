str=input()
count=0
char=input()
for i in str:
    if i==char:
        count+=1
if count==0:
    print("No")
else:
    print(count)