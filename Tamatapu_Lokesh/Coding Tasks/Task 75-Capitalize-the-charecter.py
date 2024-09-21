input_string=input()
num=int(input())

str1=""
i=0
while i<len(input_string):
    if i==num:
        str1+=input_string[i].upper()
    else:
        str1+=input_string[i]
    i+=1
print(str1)
    
