import random

import matplotlib.pyplot as plt

nRolls = int(input("How many rolls? "))

n = 0

storage = [0, 0, 0, 0, 0, 0]

while n < nRolls:
    number = random.randint(1, 6)
    #print(number)
    n = n + 1
    storage[number-1] = storage[number-1]+1

print(storage)
print("Frequency of 2 is: " + str(storage[1]))
print("Relative frequency of 2 is: " + str(storage[1]/nRolls))

fig = plt.figure()
ax = fig.add_axes([0,0,1,1])
langs = ['1', '2', '3', '4', '5', '6']
students = storage
ax.bar(langs,students)
plt.show()
