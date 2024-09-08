num=list(map(int,input().split()))
n=int(input())
length=len(num)
i=0
while i<length:
    if num[i]==n:
        print("Yes")
        break
    i+=1