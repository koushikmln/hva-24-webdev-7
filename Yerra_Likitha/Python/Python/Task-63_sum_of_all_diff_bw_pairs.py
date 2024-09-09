n=list(map(int,input().split()))
sub=0
i=0
while i<=len(n)-1:
    for j in range(i+1,len(n)):
        sub=sub+abs(n[i]-n[j])
    i+=1
print(sub)