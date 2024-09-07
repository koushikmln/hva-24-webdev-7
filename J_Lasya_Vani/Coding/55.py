l=list(map(int,input().split()))
n=int(input())
i=0
while i<len(l):
    if l[i]>n:
        print(l[i])
        break
    i+=1
if i==len(l):
    print("No")
