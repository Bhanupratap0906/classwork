arr = [1,2,3,4,5,6]
d = 2
i  =1
for _ in range(d):
    first = arr[0]
    for j in range(len(arr)-1):
        arr[j] = arr[j+1]

    arr[len(arr)-1] = first

print(arr)