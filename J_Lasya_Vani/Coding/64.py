arr = list(map(int, input().split()))
target = int(input())
seen = set()
i = 0
while i < len(arr):
    complement = target - arr[i]
    if complement in seen:
        print(complement, arr[i])
    seen.add(arr[i])
    i += 1
