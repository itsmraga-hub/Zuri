# Read text from a file, and count the occurence of words in that text
# Example:
# count_words("The cake is done. It is a big cake!")
# --> {"cake":2, "big":1, "is":2, "the":1, "a":1, "it":1}

from itertools import count


def read_file_content(filename):
    # [assignment] Add your code here
    with open(filename, 'r')as file:
        content = file.read()
        return content


def count_words():
    text = read_file_content('story.txt')
    # [assignment] Add your code here
    myDict = {}
    for word in text.lower().split():
        if word in myDict:
            myDict[word] += 1
        else:
            myDict[word] = 1

    return myDict


# content = read_file_content('story.txt')
# print(content)
print(count_words())
