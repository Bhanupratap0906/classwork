def key(email):
    if not email or '@' not in email:
        return "Invalid email   "
    
    username, domain = email.split('@')
    
    ascii_codes = ''
    for char in username:
        ascii_codes += str(ord(char))
    
    sorted_ascii_codes = ''.join(sorted(ascii_codes))
    
    reordered_domain = reorder_domain(domain)
    
    combined = sorted_ascii_codes + "#" + reordered_domain
    
    final_key = combined[::-1]
    
    return final_key


def reorder_domain(domain):
    vowels = []
    digits = []
    others = []
    
    for char in domain:
        if char.lower() in 'aeiou':
            vowels.append(char)
        elif char in '0123456789':
            digits.append(char)
        else:
            others.append(char)
    
    return ''.join(vowels) + ''.join(digits) + ''.join(others)
input = "abc12@domain.com"
print(key(input))