string = input()
key = input()
i = 0
count = 0
while i < len(str(string)):
    if string[i] == key:
        count += 1
    i += 1
if count:
    print(count)
else:
    print('No')