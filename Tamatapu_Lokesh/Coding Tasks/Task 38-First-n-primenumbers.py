num=int(input("Enter a number:"))
c,count=0,0
j=2
while(c<num):
    count=0
    i=1
    while(i<j+1):
        if(j%i==0):
            count+=1
        i+=1
    if(count==2):
        print(j,end=" ")
        c+=1
    j+=1
    