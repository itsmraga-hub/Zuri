def countWords(sentence):
    words = 0
    for word in sentence.split():
        words += 1

    return words


sentence = "Good Evening! How was your day?"
print(countWords(sentence))
