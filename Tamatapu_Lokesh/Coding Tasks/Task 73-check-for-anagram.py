input_string1 = input().replace(" ","")
input_string2 = input().replace(" ","")
modified_string1=input_string1.lower()
modified_string2=input_string2.lower()

if sorted(modified_string1)==sorted(modified_string2):
    print("Yes")
else:
    print("No")