arr=list(map(int,input().split()))
p=0
for i in arr:
    sq=i**0.5
    if sq.is_integer():
        print(i)
        p=1
        break
if p==0:
    print("No")