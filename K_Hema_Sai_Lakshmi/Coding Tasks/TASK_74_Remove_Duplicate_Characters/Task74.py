s=input()
without_duplicates=set()
result=[]
for i in s:
    if i not in without_duplicates:
        without_duplicates.add(i)
        result.append(i)
print(*result,sep="")