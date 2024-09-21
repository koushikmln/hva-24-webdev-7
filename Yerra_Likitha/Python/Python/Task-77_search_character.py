s = input()
c = input()
i = f = 0
while i < len(str(s)):
    if s[i] == c:
        print('Yes')
        f += 1
        exit()
    i += 1
if f == 0:
    print('No')