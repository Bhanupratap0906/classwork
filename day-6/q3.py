def fun(arr):
    n =len(arr)
    i = 0
    j = 0
    while j<n:
        if arr[j] ==0:
            j+=1
        else:
            arr[i] = arr[j]
            i+=1
            j+=1
    del arr[i:]
    print(arr)
arr = [0, 1, 0, 2, 3, 0, 4]
fun(arr)