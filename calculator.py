# Task Title: Simple CLI Calculator
# Write a Python calculator that can perform: addition, subtraction, division, multiplication and modulus operations. # It should accept user input


print("Calculator")
print("Choose operation from choices below")
print("1: Addition\n2: Subtraction\n3: Division\n4: Multiplication\n5: Modulus")
op = int(input("Operation: "))
Number1 = int(input("Number 1: "))
Number2 = int(input("Number 2: "))


def calculator(operation, first, last):
    if operation == 1:
        return first + last
    elif operation == 2:
        return first - last
    elif operation == 3:
        return first / last
    elif operation == 4:
        return Number1 * Number2
    elif operation == 5:
        return first % last


print(calculator(op, Number1, Number2))
