## Using regex

import re

def check_palindrome(string):
    formatted_string = string.lower().replace(r'\W', '')
    reverse_string = formatted_string[::-1]
    result = formatted_string == reverse_string
    return result
    

result_1 = check_palindrome("Race Car")
result_2 = check_palindrome("racecar")
result_3 = check_palindrome("Not and palindrome")


print(f'Is "Race Car" a palindrome? => {result_1}')
print(f'Is "racecar" a palindrome? => {result_2}') 
print(f'Is "Not a palindrome" a palindrome? => {result_3}')