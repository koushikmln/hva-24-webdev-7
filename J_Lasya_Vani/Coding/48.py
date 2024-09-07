l = [3, 6, 2, 1, 8, 2, 5, 7, 1]
max_sum = l[0] 
for i in range(len(l) - 1):
    current_sum = l[i] + l[i + 1]
    if current_sum > max_sum:  
        max_sum = current_sum

print(max_sum)
