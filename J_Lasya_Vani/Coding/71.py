str=input()
vowels=0
consonants=0
for i in str:
    if i==' ':
        continue
    if i=='a' or i=='e' or i=='i' or i=='o' or i=='u':
        vowels+=1
    else:
        consonants+=1
print(vowels,consonants)