f = open("vasesin.txt", "r")
n = int(f.read())

if n < 5:
    print("0 0 0", file = f)

else:
    print(str("1 2 " + str(n-3)), file = f)

f.close()
