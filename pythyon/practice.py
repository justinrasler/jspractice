#printing in python
MY_CONSTANT = 5
my_variable = "Hello World"

print(MY_CONSTANT)
print(my_variable)

# Input function asks the questions and returns input
#user_input = input("Who are You?")

# We can interpolate the variable into this print
#print(f"Hey there {user_input}")

#loops
#while loop
counter = 0
while (counter < 10):
    print(counter)
    counter += 1
    

    #for loop
    fruits = ["apple", "banana", "cherry"]
for x in fruits:
  print(x)
  if x == "banana":
    break
