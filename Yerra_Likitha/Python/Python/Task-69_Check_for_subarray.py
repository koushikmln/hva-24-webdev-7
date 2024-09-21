array = list(map(int, input().split()))
i = 0
l = []
while i < len(array):
    j = i
    while j < len(array):
        l.append(array[i:j+1])
        j += 1
    i += 1
i = 0
while i < len(l):
    j = 0
    while j < len(l[i]):
        print(l[i][j],end=' ')
        j += 1
    print()
    i += 1