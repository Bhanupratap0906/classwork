def nextGreaterElement(nums1, nums2):
            stack  =[]
            next_greater ={}
            for num in nums2:
                while stack and num>stack[-1]:
                    prev = stack.pop()
                    next_greater[prev] = num
                stack.append(num)
            
            for i in range(len(nums1)):
                if nums1[i] in next_greater:
                    nums1[i] = next_greater[nums1[i]]
                else:
                    nums1[i] = -1
            return nums1
nums1 =[]
nums2 = []
print(nextGreaterElement(nums1, nums2))    





