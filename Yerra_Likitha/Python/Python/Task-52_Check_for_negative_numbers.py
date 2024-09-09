n=list(map(int,input().split()))
i=0
while i<=len(n)-1:
    if n[i]<0:
        print("yes")
        break
    else:
        i+=1
else:
    print("No")