input_string=input().split()
string=input()
answer=False

i=0
while i<len(input_string):
    if input_string[i]==string:
        answer=True
    i+=1
if answer:
    print("Yes")
else:
    print("No")