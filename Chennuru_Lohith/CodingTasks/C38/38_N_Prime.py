n=int(input())
number=2
i=1
prime=0
count=0
while (prime<n):
    if(number%i==0):
        count=count+1
        i=i+1
    
        prime=prime+1
    number=number+1
if count<2:
    print(number)
        
    
    
    
