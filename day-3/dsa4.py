def isValid(s) :
        stack = []
        obj = {')': '(', '}': '{', ']': '['}
        for i in s:
            if i=='(' or i=='{' or i=='[':
                stack.append(i)
            else:
                if stack and stack[-1] == obj[i]:
                    stack.pop()
                else:
                    return False
        if stack:
            return False
        else:
            return True
s = "()"        
print(isValid(s))