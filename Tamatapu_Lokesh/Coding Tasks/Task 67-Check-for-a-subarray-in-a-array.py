input_list = list(map(int, input().split()))
sub_array = list(map(int, input().split()))
list_length = len(input_list)
sub_length = len(sub_array)
i = 0
answer = False

while i <= list_length - sub_length:
    found = True
    j=0
    while j<sub_length:
        if input_list[i + j] != sub_array[j]:
            found = False
            break
        j+=1
    if found:
        answer = True
        break
    i += 1

if answer:
    print("Yes")
else:
    print("No")
