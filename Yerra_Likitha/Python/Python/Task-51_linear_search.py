n=list(map(int,input().split()))
m=int(input())
i=0
while i<=len(n)-1:
    if n[i]==m:
        print("Yes")
        break
    else:
        i+=1
else:
    print("no")