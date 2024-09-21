string = input().lower()
vcount = ccount = 0
vowels = 'aeiou'
i = 0
while i < len(str(string)):
    if string[i] in vowels:
        vcount += 1
    elif  (string[i].isalpha) and (string[i] not in vowels) and (string[i] != ' ' and string[i] != '.'):
        ccount += 1
    i += 1

print(vcount, ccount)