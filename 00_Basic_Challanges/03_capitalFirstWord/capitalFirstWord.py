
## Using for loop

def capitalizeFirstWord(string):
  
  splitByWords = string.split()

  for i in range(len(splitByWords)):

    splitByWords[i] = splitByWords[i][0].upper() + splitByWords[i][1:]  

  return " ".join(splitByWords)  


print(capitalizeFirstWord("AA"))  
print(capitalizeFirstWord("This is a sentence"))  
