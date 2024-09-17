input_list = list(map(int, input().split()))
list_length=len(input_list)
i=0

while i < list_length:
    j = i
    while j < list_length:
        k = i
        while k <j+1:
            print(input_list[k],end=" ")
            k += 1
        print()
        j += 1
    i += 1







