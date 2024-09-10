s=input()
k=input()
c=0
count=0
for i in s:
    if i==k:
        c=1
        count+=1
if c==0:
    print("No")
else:
    print(count)
