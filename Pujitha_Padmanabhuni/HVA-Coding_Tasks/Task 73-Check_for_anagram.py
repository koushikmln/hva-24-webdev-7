s1=input().lower()
s2=input().lower()
flag=0
HT={}
for i in s1:
    if i not in HT:
        HT[i]=1
    else:
        HT[i]+=1
for i in s2:
    if i not in HT:
        print("No")
        flag=1
        break
    elif HT[i]==1:
        del HT[i]
    else:
        HT[i]-=1
if flag==0:
    print("Yes")