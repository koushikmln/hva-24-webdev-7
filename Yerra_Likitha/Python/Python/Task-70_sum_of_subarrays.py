arr = list(map(int, input().split()))
i = sum = 0
l = []
while i < len(arr):
    j = i 
    while j < len(arr):
        l.append(arr[i:j+1])
        j += 1
    i += 1
i = 0
while i < len(l):
    j = 0
    while j < len(l[i]):
        sum +=(l[i][j])
        j += 1
    i += 1
print(sum)