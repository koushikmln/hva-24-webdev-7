input_string = input()
input_char=input()
words = input_string.split()
count=0
is_char = False

i = 0
while i < len(words):
    word = words[i]
    j = 0
    while j < len(word):
        char = word[j]
        if char == input_char:
            is_char = True
            count+=1
        j += 1
    i += 1
if is_char:
    print(count)
else:
    print("No")