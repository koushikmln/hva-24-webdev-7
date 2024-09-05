arr=list(map(int,input().split()))
num=int(input())
p=0
for i in arr:
    if i>num:
        print(i)
        p=1
        break
if p==0:
    print("No")