

def prime(n):
    i=2
    count=0
    while(i<(n//2)+1):
        if(n%i==0):
            count=count+1
        i=i+1
    if count==0:
        return n
    

n=int(input())
print(prime(n))
