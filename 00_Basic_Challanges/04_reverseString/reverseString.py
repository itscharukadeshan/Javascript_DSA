

def reverseString (string) :

    words = string.split(" ")
    
    reversedWords = [word[::-1] for word in words]

    reversedWords.reverse()

    result = " ".join(reversedWords)

    return result



print(reverseString("sdohtem ni tliub gnisu desrever uoy gnirts eht si sihT"))