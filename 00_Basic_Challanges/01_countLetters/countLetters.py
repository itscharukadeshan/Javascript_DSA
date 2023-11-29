# ? Count letters case sensitive

def countLetters(str, letter):

    count = 0
    string = str.lower()
    letter = letter.lower()
    
    for i in range(len(string)):
        if string[i] == letter:
            count += 1
            
    return f"Letter {letter} is present {count} times in {string}"

print(countLetters("My Name", "M"))