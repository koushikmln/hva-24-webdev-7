s=input()
n=int(input())
res=''
for i in range(len(s)):
    if i==n:
        res+=s[i].upper()
    else:
        res+=s[i]
print(res)