def fun(arr, t):
    left = 0
    right = len(arr) - 1

    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == t:
            return mid
        elif arr[mid] < t:
            left = mid + 1
        else:
            right = mid - 1

    return -1  
arr = [1, 3, 5, 7, 9]
t= 7
print(fun(arr,t))