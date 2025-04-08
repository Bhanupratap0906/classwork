nums = [2,7,11,15]
target = 9
def fun(nums,target):
    nums.sort()
    j= len(nums)-1
    i =0
    while i<j:
        if nums[i] + nums[j] ==target:
            return [i,j]
        elif nums[i] + nums[j] <target:
            i+=1
        else:
            j-=1
print(fun(nums,target))