str=input()
length=False
lower=False
upper=False
digit=False
specialChar=False
if len(str)>=8:
    length=True
    for i in str:
        if i.islower():
            lower=True
        if i.isupper():
            upper=True
        if i.isdigit():
            digit=True
        if not i.isalnum():
            specialChar=True
if length and lower and upper and digit and specialChar:
    print("Yes")
else:
    print("No")

    
