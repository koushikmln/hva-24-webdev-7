input_string = input()
list_string = list(input_string)

i = 0
while i < len(list_string):
    j = i + 1
    while j < len(list_string):
        if list_string[i] == list_string[j]:
            k = j
            while k < len(list_string) - 1:
                list_string[k] = list_string[k + 1]
                k += 1
            list_string = list_string[:-1]
        else:
            j += 1
    i += 1

final_string = "".join(list_string)
print(final_string)
