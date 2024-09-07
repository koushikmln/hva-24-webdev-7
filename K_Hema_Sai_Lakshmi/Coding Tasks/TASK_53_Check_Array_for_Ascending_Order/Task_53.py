

a=list(map(int,input().split()))
for i in range(len(a)-1):
    if a[i]>a[i+1]:
        print("No")
        exit() 
print("Yes")