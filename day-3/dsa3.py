def maxArea(height):
        i = 0
        j =  len(height) -1
        max_water = 0
        while i < j:
            diff = j-i
            min_height  = min(height[i], height[j])
            max_water = max(max_water , (diff*min_height))
            if height[i] < height[j]:
                i+=1
            else:
                j-=1
        return max_water
height = [1,8,6,2,5,4,8,3,7]
print(maxArea(height))