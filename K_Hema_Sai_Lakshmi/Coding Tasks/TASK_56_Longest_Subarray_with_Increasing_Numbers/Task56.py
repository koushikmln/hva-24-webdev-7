# a=list(map(int,input().split()))
a=[5,4,4,7,6,3,2,4,6,8,6,3,6,8,5]
i=0

max_len=0
while i<len(a):
    j=i
    c=1
    while j<len(a)-1:
        if a[j]<=a[j+1]:
            c=c+1
            
        if max_len<c:
            max_len=c
        if a[j]>a[j+1]:
            break
        
        j=j+1
    
    i=i+1
print(max_len)