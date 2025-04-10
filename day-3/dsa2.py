def productExceptSelf(nums):
        n = len(nums)
        prefix = [1]*n
        prod = 1
        for i in range(n):
            prefix[i] *=prod
            prod *=nums[i]
        prodt = 1
        for i in range(n-1 ,-1, -1):
            prefix[i] *=prodt
            prodt *=nums[i]
        return prefix
nums = [1,2,3,4]
print(productExceptSelf(nums))