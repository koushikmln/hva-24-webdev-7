a=list(map(int,input().split()))

for i in range(len(a)):
    s=a[i]**0.5
    if s.is_integer():
        print(a[i])
        exit()
        

print("No")

