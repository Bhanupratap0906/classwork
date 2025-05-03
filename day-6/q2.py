def fun(arr,value):
    obj = {}
    for i in arr:
        if i in obj:
            obj[i] +=1
        else:
            obj[i]= 1
    print(obj[value])
arr = [2, 3, 2, 4, 2]
value = 2
fun(arr,value)