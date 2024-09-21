arr1 = list(map(int, input().split()))
arr2 = list(map(int, input().split()))
n1, n2 = len(arr1), len(arr2)
found = False
i = 0

while i <= n1 - n2:
    j = 0
    while j < n2 and arr1[i + j] == arr2[j]:
        j += 1
    if j == n2:
        found = True
        break
    i += 1

if found:
    print("Yes")
else:
    print("No")
