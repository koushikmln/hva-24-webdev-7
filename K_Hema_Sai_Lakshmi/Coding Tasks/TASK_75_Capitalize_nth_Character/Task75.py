s=input()
index=int(input())
s=list(s)
s[index]=s[index].upper()
print(*s,sep="")