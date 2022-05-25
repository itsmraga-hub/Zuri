// class Tree {
//     constructor(leaves = 5, size) {
//         this.leaves = leaves
//         this.size = size
//     }
// }

// class Maple extends Tree {
//     constructor(leafColor, leaves, size) {
//         super(leaves, size);
        // this.leafColor = leafColor
//     }
// }
// let sage = new Maple("yellow", undefined, 10)
// console.log(sage.leaves)

// function Train() {
//     this.sound = "kkkk";
// };
// let Magnum = new Train();
// let Sonic = new Train();
// Train.prototype = {
//     speed: 350
// };
// let f = new Train()
// function incrementSpeed(train) {
//     return train.speed + 50;
// };
// // console.log(incrementSpeed(f));
// let a = incrementSpeed(Magnum);
// console.log(a);

// function Item(name, a, price) {
//     this.name = name
//     this.a = a
//     this.price = price
//     this.p = function() {
//         this.a = this.a - 1
//     }
// }
// let b = new Item("B", 100, 2)
// for (let i = 0; i < 10; i++) {
//     b.p()
// }
// console.log(b.a)

// var donuts = [
//     {type: "Jelly", cost: 1.22},
//         {type: "Jelly", cost: 1.22},
//             {type: "Jelly", cost: 1.22},
//                 {type: "Jelly", cost: 1.22}
// ]
// donuts.forEach(function(e) {
//     console.log(e.type)
// })

// let a = 30
// while (a > 10) {
//     console.log("a")
//     a--
//     break
// }

// console.log(typeof(undefined))

// function firstNonRepeatingLetter(s) {
  // Add your code here
//   let codeArr = []
//   for (let i = 0; i < s.length; i++) {
//     codeArr.push(s.charCodeAt(i))
//     if (s.charCodeAt(i) > 96 && s.charCodeAt(i) < 124) {
//       codeArr.push(s.charCodeAt(i))
//     }
//   }
//   if (codeArr.length < 1) {
//     return ''
//   }
//   function findSingle(arr) {
//   for (var i = 0, s = []; i < arr.length; i++) {
//     if (arr.indexOf(arr[i], arr.indexOf(arr[i]) + 1) == -1)
//       s.push(arr[i]);
//   };
//   return s;
// };
//   return String.fromCharCode(findSingle(codeArr)[0]);
//   let arr = s.split("");
  
// }

// console.log(firstNonRepeatingLetter('stress'));

// function alphabetPosition(text) {
//   text = text.toLowerCase();
//   let ans = ""
//   for (let i = 0; i < text.length; i++) {
//     let a = text.charCodeAt(i)
//     if (a > 96 && a <123) {
//       ans = ans + ((a - 96) + " ");
//     }
//   }
//   return ans;
// }
// let text = "The sunset sets at twelve o' clock."
// console.log(alphabetPosition(text))

// const binaryArrayToNumber = arr => {
  // your code
//   let a = 0
//   let pow = 0
//   for (let i = arr.length; i >= 0; i--) {
//     let sum = arr[i] * (2 ** pow)
//     a += sum;
//     pow++;
//   }
//   return a
// };
// console.log(binaryArrayToNumber([0, 0, 0, 1]))

// function sortArray(array) {
  // Return a sorted array.
//   let oddArr = []
//   array.forEach(function(e) {
//     if (Math.abs(e) % 2 == 1) {
//       oddArr.push(e)
//       e = 0
//     }
//   })
//   oddArr.sort((a, b) => a - b);
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < oddArr.length; j++) {
//       if(array[i] % 2 == 1) {
//         array[i] = oddArr.shift()
        // array[i] = oddArr[j]
//         break;
//       }
//     }
//   }
//   return array
// }
// console.log(sortArray([5, 3, 2, 8, 1, 4]))
// console.log(sortArray([5, 3, 1, 8, 0]))

// let arr = [3, -18, -21, 19, 24, -31, -15, -33, 42, -30, -41, 28, -4, 19, 27, -6, -8, 2, -33, 33, 16, 28, 41, -26, 47, -11, 8, -15]
// let arr = [-34, -13, 29, -5, 38]
// console.log(sortArray(arr))

// function tribonacci(signature,n){
  //your code here
//   if (n == 0) {
//     return []
//   }
//   for (let i = 0, j = 0; i < n; i++) {
//     let sig = [...signature]
//     let arr = sig.splice(j, signature.length);
//     signature.push(arr.reduce((a, b) => a + b));
//     j++;
//   }
//   return signature;
// }

// console.log(tribonacci([1, 2, 3], 10))

// function findUniq(arr) {
  // do magic
//   arr.sort((a, b) => a - b)
//   for (let i = 0; i < arr.length; i++) {
//     let a = arr[i]
//     for (let j = 0; j < arr.length; j++) {
//       if (a != arr[j]) {
//         return arr[j]
//       }
//     }
//   }
// }

// console.log(findUniq([0, 0, 1]))

// function order(words){
  // ...
//   words = words.split(" ");
//   let numbers = [];
//   for (let i = 0; i < words.length; i++) {
//     let n = words[i].match(/\d+/g);
//     numbers.push(parseInt(n));
//   }
//   numbers.sort((a, b) => a - b);
//   let ansArr = [...words];
//   for (let i = 0; i < words.length; i++) {
//     let number = parseInt(words[i].match(/\d+/g));
//     let a = numbers.indexOf(parseInt(number));
//     ansArr[a] = words[i];
//   };
//   return ansArr.join(" ");
// }

// console.log(order("is2 Thi1s T4est 3a"));

// function isValidWalk(walk) {
  //insert brilliant code here
//   let d = 0
//   for(let i = 0; i < walk.length; i++) {
//     if (walk[i] == 'n' || walk[i] == 'w') {
//       d++;
//     }
//     if (walk[i] == 's' || walk[i] == 'e') {
//       d--;
//     }
//   }
//   if (d === 0) {
//     if (walk.length > 9 && walk.length < 11) {
//       return true
//     }
//   }
//     return false
//   return false
// }

// console.log(isValidWalk([]))

// function fakeBin(x){
//   let y = x.split("");
//   for (let i = 0; i < y.length; i++) {
//     if (Number(y[i]) < 5) {
//       y[i] = 0;
//     }
//     if (Number(y[i]) > 4) {
//       y[i] = 1;
//     }
//   }
// }

// console.log()