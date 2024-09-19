l=list(map(int,input().split()))
dict1={}
for i in l:
    if i in dict1:
        dict1[i]=dict1[i]+1
    else:
        dict1[i]=1
for key,value in dict1.items():
    print(f"{key} {value}")



    
