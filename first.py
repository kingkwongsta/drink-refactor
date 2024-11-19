def add_numbers():
    try:
        # Get input from user
        num1 = float(input("Enter first number: "))
        num2 = float(input("Enter second number: "))
        
        # Calculate sum
        result = num1 + num2
        
        # Display result
        print(f"The sum of {num1} and {num2} is: {result}")
        
    except ValueError:
        print("Please enter valid numbers")

# Run the program
if __name__ == "__main__":
    print("Welcome to the Adding Application!")
    while True:
        add_numbers()
        
        # Ask if user wants to continue
        again = input("\nWould you like to add more numbers? (yes/no): ").lower()
        if again != 'yes':
            print("Thank you for using the Adding Application!")
            break
