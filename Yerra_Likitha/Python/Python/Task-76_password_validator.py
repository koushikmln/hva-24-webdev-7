s = input()
l = u = n = sc = 0
if len(str(s)) >= 8:
    i = 0
    while i< len(str(s)):
        if s[i].islower():
            l += 1
        if s[i].isupper():
            u += 1
        if s[i].isdigit():
            n += 1
        if s[i] in '!@#$%^&*':
            sc += 1
        i += 1
    if l != 0 and u != 0 and n != 0 and sc != 0:
        print('Yes')
    else:
        print('No')
else:
    print('No')