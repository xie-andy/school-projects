from sympy import *

x = Symbol('x')

distance = input("Distance travelled: ")

#Vinc = 0.994*(9.404*log(x))

Vinc = 9.404*log(x)

xFin = 8.880386721374412

vFin = 15.2839

#Solving for the velocity y-offset

ans = (9.404*log(float(xFin))-float(vFin))

#ans = (0.994*9.404*log(float(xFin))-float(vFin))

#printing final velocity equation

print("VELOCITY EQUATION: " + str(Vinc-ans.evalf()))

#printing integrating velocity equation (displacement)

integ = integrate(Vinc-ans.evalf())

print("INDEFINITE INTEGRAL OF VELOCITY: " + str(integrate(Vinc-ans.evalf())))

#printing form for wolfram

print("WOLFRAM FORM: " + str(integ-float(distance)))

vEnd = input("Enter the ending x value: ")

vEval = (Vinc-ans.evalf()).subs(x, vEnd)

print(vEval.evalf())

#print((9.404*log(7.165838404821225) - 5.24299236464635).evalf())

#print("FINAL VELOCITY: " + str(vEval.evalf()))
print("FINAL x value: " + str(vEnd))

#INSTRUCTIONS

#INPUT THE DISTANCE OF THE CARS TRAVELLED minus one, e.g. for car 9 input 8*5.5 or 44m

#Next, the program will output the velocity function and the indefinite integral

#Put the indefinite integral in solver form into Wolfram, this (in negative) becomes the C for your definite integral

#Solve the definite integral for x using Wolfram

#Input the final value of x to give the final velocity

#-20.2579
