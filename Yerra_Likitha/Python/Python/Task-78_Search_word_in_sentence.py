s = input()
w = input()
list = []
list.append(s.split())
i = 0
while i < len(list[0]):
    if i == len(list[0])-1:
        a = list[0][i].rsplit('?')
        if  a[0] == w:
            print("Yes")
            exit()
    elif list[0][i] == w:
        print('Yes')
        exit()
    i += 1
if i > len(list):
    print('No')