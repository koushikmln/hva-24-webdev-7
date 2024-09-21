arr = list(map(int, input().split()))
freq = {}
i = 0
while i < len(arr):
    if arr[i] in freq:
        freq[arr[i]] += 1
    else:
        freq[arr[i]] = 1
    i += 1
for key in freq:
    print(key, freq[key])
