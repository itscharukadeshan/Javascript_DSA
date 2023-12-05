## * Built in method

def findMaxWithBuiltIn (array) :

    result =max(array)

    return result


print(findMaxWithBuiltIn([1, 5, 3, 2, 7, 10, 5, 15]))


## With for loops

def findMaxWithForLoops(array):

    max = array[0]
    
    for i in range(len(array)):

        if array[i] > max:

            max = array[i]

    return max


print(findMaxWithForLoops([1, 5, 3, 2, 7, 10, 5, 15]))
