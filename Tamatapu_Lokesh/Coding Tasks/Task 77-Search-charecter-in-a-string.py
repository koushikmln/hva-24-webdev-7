input_string=input()
char=input()
answer=False

i=0
while i<len(input_string):
    if input_string[i]==char:
        answer=True
    i+=1
if answer:
    print("Yes")
else:
    print("No")