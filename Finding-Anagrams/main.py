# Check if a word is an anagrams
# Example:
# find_anagrams("hello") --> False
# find_anagrams("racecar") --> True


def find_anagrams(word):
    # [assignment] Add your code here
    anotherWord = word[::-1]
    if word == anotherWord:
        return True
    else:
        return False


print(find_anagrams("racecar"))
# //True
print(find_anagrams("hello"))
# //False
