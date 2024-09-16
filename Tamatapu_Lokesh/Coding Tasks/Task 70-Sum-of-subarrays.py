input_list = list(map(int, input().split()))
list_length=len(input_list)
i = 0
sum = 0

while i < list_length:
    j = i
    while j < list_length:
        k = i
        while k <j+1:
            sum+=input_list[k]
            k += 1
        j += 1
    i += 1
print(sum)







