a=list(map(int,input().split()))
for i in range(len(a)):
    print(a[i])
    for j in range(i+1,len(a)):
        print(*a[i:j+1:1])