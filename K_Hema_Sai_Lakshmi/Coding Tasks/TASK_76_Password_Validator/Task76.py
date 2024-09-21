s=input()
lower=0
upper=0
digit=0
special_char=0
if len(s)<8:
    print("No")
    exit()
for i in s:
    if i.islower():
        lower=1
    if i.isupper():
        upper=1
    if i.isdigit():
        digit=1
    if not i.isalnum():
        special_char=1
    if lower==1 and upper==1 and digit==1 and special_char==1:
        print("Yes")
        exit()
if lower==1 and upper==1 and digit==1 and special_char==1:
    print("Yes")
else:
    print("No")
    