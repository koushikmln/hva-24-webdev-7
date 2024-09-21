string = input()
index = int(input())
newString = ''
i = 0
while i < len(str(string)):
    if i == index:
        newString += string[i].upper()
    else:
        newString += string[i]
    i += 1
print(newString)