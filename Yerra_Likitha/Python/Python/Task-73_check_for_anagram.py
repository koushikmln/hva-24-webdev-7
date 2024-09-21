s1 = input().lower()
s2 = input().lower()
a = ''
b = ''
i = 0
while i < len(str(s1)):
    if s1[i] != ' ':
        a += s1[i]
    i += 1
i = 0
while i < len(str(s2)):
    if s2[i] != ' ':
        b += s2[i]
    i += 1
s1 = sorted(a)
s2 = sorted(b)
if s1 == s2:
    print('Yes')
else:
    print('No')