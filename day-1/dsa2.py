s ="pwwkew"
obj = set()
n = len(s)
max_count =  0
left = 0 
for i in range(n):
    while s[i] in obj:
        obj.remove(s[left])
        left +=1
    obj.add(s[i])
    max_count  = max(max_count , i-left +1)
print(max_count)