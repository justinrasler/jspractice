#printing in python
# MY_CONSTANT = 5
# my_variable = "Hello World"

# print(MY_CONSTANT)
# print(my_variable)

# Input function asks the questions and returns input
#user_input = input("Who are You?")

# We can interpolate the variable into this print
#print(f"Hey there {user_input}")

#loops
#while loop
# counter = 0
# while (counter < 10):
#     counter += 1
#     if (counter % 2) == 0: print ("even")
#     else: print ("odd")

    

#     #for loop
#     fruits = ["apple", "banana", "cherry"]
# for x in fruits:
#   print(x)
#   if x == "banana":
#     break

# Collections
#in python there are lists(arrays in javascript) nad dictionaries(objescts in javascript)

# my_list = [1,2,3]
# print(my_list) # Printing the whole list
# print(my_list[0]) # Printing an individual item

# my_dictionary = {"cheese": "gouda", "bread":"rye"}
# print(my_dictionary) #Printing the whole dictionary
# print(my_dictionary["cheese"]) #accessing one value from the dictionary

# list = [1,2,3,4,5,6,7,8,9,10]
# x = len(list)
# print (x)
# list = [1,2,3,4,5,6,7,8,9,10]
# for x in list:
#   print (x)

# functions in python
# def add_nums (x,y):
#     return x + y

# print(add_nums(5,5))

def sub_nums (x,y):
    return x-y

print(sub_nums(11,6))

def say_hello (name,age):
    print("hello {}, how does it feel to be {} years old".format(name, age))
  
say_hello("justin", 24)

