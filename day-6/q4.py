def rotate_array_right(arr, k):
    n = len(arr)
    k = k % n 
    return arr[-k:] + arr[:-k]
arr = [1, 2, 3, 4, 5]
k = 2
rotated = rotate_array_right(arr, k)
print(rotated)