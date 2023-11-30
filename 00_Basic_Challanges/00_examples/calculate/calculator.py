## Basic calculater that takes two numbers and do basic oparation

def calculate(a, b, operator):
    """Calculate simple math operation on 2 numbers"""
    first_number = a 
    second_number = b
    
    if operator == "+":
        result = first_number + second_number
    elif operator == "-":
        result = first_number - second_number
    elif operator == "*":
        result = first_number * second_number
    elif operator == "/":
        result = first_number / second_number
    else:
        raise ValueError("Invalid operator")
        
    return result

print(calculate(10, 4, "+"))