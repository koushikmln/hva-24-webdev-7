string = input()
newString = []
i = 0
while i < len(str(string)):
    if string[i] not in newString:
        newString.append(string[i])
    i += 1
i = 0
while i < len(newString):
    print(newString[i],end="")
    i += 1