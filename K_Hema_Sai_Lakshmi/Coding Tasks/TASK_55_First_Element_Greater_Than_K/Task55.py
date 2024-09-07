a=list(map(int,input().split()))
n=int(input())
for i in range(len(a)):
    if a[i]>n:
        print(a[i])
        exit()
print("No")