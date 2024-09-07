
# Taking input as a list of integers
arr = [11,1,13,21,3,7]
num_to_search = 3
index = 0
found = False
while index < len(arr):
    if arr[index] == num_to_search:
        found = True
        break
    index += 1
if found:
    print("Yes")
else:
    print("No")
