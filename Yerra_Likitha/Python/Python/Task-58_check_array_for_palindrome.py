arr=list(map(int,input().split()))
arr.reverse()
if arr==arr[::-1]:
    print("yes")
else:
    print("No")