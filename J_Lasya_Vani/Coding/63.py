arr = list(map(int, input().split()))
total_sum = 0
i = 0
while i < len(arr):
    j = i + 1
    while j < len(arr):
        total_sum += abs(arr[i] - arr[j])
        j += 1
    i += 1
print(total_sum)
