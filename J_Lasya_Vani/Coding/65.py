arr = list(map(int, input().split()))
seen = set()
for num in arr:
    if num in seen:
        print(num)
        break
    seen.add(num)
else:
    print("No")
