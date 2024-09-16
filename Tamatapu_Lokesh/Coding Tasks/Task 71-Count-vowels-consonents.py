"""input_string=input()
words=input_string.split()
i=0
vowel_count=0
consonent_count=0
empty_count=0
vowel_chars = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

while i<len(words):
    j=0
    if words[i]== :
        vowel_count+=1
    elif words[i]==' ':
        empty_count+=1
    elif words[i].isalpha():
        consonent_count+=1
    i+=1
print(vowel_count,consonent_count)"""

input_string = input()
words = input_string.split()
vowel_count = 0
consonant_count = 0

vowel_chars = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

i = 0
while i < len(words):
    word = words[i]
    j = 0
    while j < len(word):
        char = word[j]
        k = 0
        is_vowel = False
        while k < len(vowel_chars):
            if char == vowel_chars[k]:
                is_vowel = True
                break
            k += 1
        if is_vowel:
            vowel_count += 1
        elif char.isalpha():  
            consonant_count += 1
        j += 1
    i += 1

print(vowel_count,consonant_count)

