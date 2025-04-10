def subarraySum(nums, k):
        obj ={0:1}
        count = 0
        curr_count =0
        for num in nums:
            curr_count+=num
            if (curr_count-k) in obj:
                count+=obj[curr_count -k]
            if curr_count in obj:
                obj[curr_count]+=1
            else:
                obj[curr_count] =1
            
        return count
nums = [1,1,1], k = 2
print(subarraySum(nums, k))