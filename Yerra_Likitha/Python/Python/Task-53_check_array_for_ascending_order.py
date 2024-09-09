n=list(map(int,input().split()))
i=0
while i<len(n)-1:
    if n[i]>n[i+1]:
        print("no")
        break
    i+=1
else:
    print("yes")