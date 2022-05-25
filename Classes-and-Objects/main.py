class Student:
    # [assignment] Skeleton class. Add your code here
    def __init__(self, name, age, tracks, score):
        self.name = name
        self.age = age
        self.tracks = tracks
        self.score = score

    def change_name(self, name):
        self.name = name

    def change_age(self, age):
        self.age = age

    def add_track(self, track):
        self.tracks.append(track)

    def get_score(self):
        return self.score


Bob = Student(name="Bob", age=26, tracks=["FE", "BE"], score=20.90)

print(Bob.name, Bob.age, Bob.tracks, Bob.score)
# // Bob 26 ['FE', 'BE'] 20.9

# Expected methods
Bob.change_name("Peter")
Bob.change_age(34)
Bob.add_track("UI/UX")
Bob.get_score()

print(Bob.name, Bob.age, Bob.tracks, Bob.score)
# // Peter 34 ['FE', 'BE', 'UI/UX'] 20.9
