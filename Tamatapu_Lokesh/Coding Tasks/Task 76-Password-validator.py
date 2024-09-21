input_string=input()

special_characters="!@#$%^&*()}?/{"

lower_case=False
upper_case=False
number=False
special_char=False

i=0
while i<len(input_string):
    if input_string[i].islower():
        lower_case=True
    elif input_string[i].isupper():
        upper_case=True
    elif input_string[i].isdigit():
        number=True
    elif input_string[i] in special_characters:
        special_char=True
    i+=1
if lower_case and upper_case and number and special_char:
    print("Yes")
else:
    print("No")

