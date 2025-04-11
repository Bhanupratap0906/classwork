def longestConsecutive(nums):
        if not nums:
            return 0
        nums.sort()
        n = len(nums)
        i = 0
        max_count = 1
        curr_count = 1
        while i<n-1:
            if nums[i] +1 == nums[i+1]:
                curr_count +=1
                i+=1
            elif nums[i] ==nums[i+1]:
                i+=1
            else:
                max_count = max(max_count , curr_count)
                curr_count = 1
                i+=1
        return max(max_count,curr_count )
nums =[]
print(longestConsecutive(nums))