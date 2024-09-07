s=input()
word=input()
flag=0
spl=['!','@',"#",'$','%','^','&','*','(',')','-','_','+','-',';',',','/','?','{','}','[',']']
for i in s:
    if i in spl:
        s=s.replace(i,'')
l=s.split()
print(l)
for i in l:
    if word==i:
        flag=1
        print("Yes")
        break
if flag==0:
    print("No")