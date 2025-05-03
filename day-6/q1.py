def fun(n):
    fact = n
    if n==0:
        return  1
    fact *=fun(n-1)
    return fact
print(fun(5))