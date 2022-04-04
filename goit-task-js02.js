// Задача № 1
function checkAge(age) {
  if (age >= 18) { // Change this line
    return "You are an adult";
  }

  return "You are a minor";
}

// Задача № 2 
function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  // Change code below this line

  

  if (password === ADMIN_PASSWORD) {
    return "Welcome!";
  }  
     return "Access denied, wrong password!";
  

  
  // Change code above this line
}
// Задача № 3 
function checkStorage(available, ordered) {
  // Change code below this line
  

  if (ordered === 0) {
    return "Your order is empty!";
  } 
  if (ordered > available) {
    return "Your order is too large, not enough goods in stock!";
  } 
  return "The order is accepted, our manager will contact you";


  
  // Change code above this line
}
// Задача № 4 
const fruits = ["apple", "plum", "pear", "orange"]
// Задача № 5 
const fruits = ["apple", "plum", "pear", "orange"];
const firstElement = fruits[0]
const secondElement = fruits[1]
const lastElement = fruits[3]
// Задача № 6
const fruits = ["apple", "plum", "pear", "orange"];

fruits [1] = "peach"
fruits [3] = "banana"
// Задача № 7 
const fruits = ["apple", "peach", "pear", "banana"];

const fruitsArrayLength = fruits.length
// Задача № 8
const fruits = ["apple", "peach", "pear", "banana"];
const lastElementIndex = fruits.length-1;
const lastElement = fruits[lastElementIndex]
// Задача № 9
function getExtremeElements(array) {
    // Change code below this line
    const deleteElemets = array.splice(1, array.length - 2)
    return array
    // Задача № 10 
    function splitMessage(message, delimeter) {
        let words;
        // Change code below this line
        words = message.split(delimeter)
        // Change code above this line
        return words;
    }

// Задача № 11
    function calculateEngravingPrice(message, pricePerWord) {
        // Change code below this line
        let a = message.split(" ");
        let b = a.length
        const result = b * pricePerWord
        return result

        // Задача № 12
        function makeStringFromArray(array, delimeter) {
            let string;
            // Change code below this line
            string = array.join(delimeter)


            // Change code above this line
            return string;
        }
        // Задача № 13 
        function slugify(title) {
            // Change code below this line
            const a = title.split(" ")
            const b = a.join("-")
    
            const slug = b.toLowerCase();
            return slug

            // Change code above this line
        }
        // Задача № 14 
        const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

        // Change code below this line
        const firstTwoEls = fruits.slice(0, 2);
        const nonExtremeEls = fruits.slice(1, 4);
        const lastThreeEls = fruits.slice(2);
        // Задача № 15 
        const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
        const newClients = ['Peach', 'Houston'];

        const allClients = oldClients.concat(newClients);
        // Задача № 16 
        function makeArray(firstArray, secondArray, maxLength) {
            // Change code below this line
            const allArray = firstArray.concat(secondArray);

            if (allArray.length >= maxLength) {
                return allArray.slice(0, maxLength)
            }
            return allArray
        }
        // Задача № 17 
        const start = 3;
        const end = 7;

        for (let i = start; i <= end; i += 1) { // Change this line
            console.log(i);
        }
        // Задача № 18 
        function calculateTotal(number) {
            // Change code below this line
            let result = 0
            for (let i = 0; i <= number; i += 1)
                result += i
            return result
            // Change code above this line
        }
        // Задача № 19 
        const fruits = ['apple', 'plum', 'pear', 'orange'];

        for (let i = 0; i < fruits.length; i += 1) { // Change this line
            const fruit = fruits[i]; // Change this line
            console.log(fruit);
        }
        // Задача № 20 
        function calculateTotalPrice(order) {
            let total = 0;
            // Change code below this line
            for (let i = 0; i < order.length; i++) {
                total += order[i]
            }
 
            return total;
        }
        // Задача № 21 
        function findLongestWord(string) {
            // Change code below this line
            let arr = string.split(" ");
            let maxString = [0];
            let shortWord = "";
            for (let i = 0; i < arr.length; i += 1) {
                if (arr[i].length > maxString) {
                    shortWord = arr[i]
                    maxString = arr[i].length;
                }
            }
     
   
            return shortWord

            // Change code above this line
        }
        // Задача № 22 
        function createArrayOfNumbers(min, max) {
            const numbers = [];
            // Change code below this line
            for (let i = min; i <= max; i += 1) {
                numbers.push(i)
            }
            // Change code above this line
            return numbers;
        }
        // Задача № 23 
        function filterArray(numbers, value) {
            // Change code below this line
            let result = []
    
            for (let i = 0; i < numbers.length; i += 1) {
                if (numbers[i] < value) {
                    continue
                }
                else if (numbers[i] === value) {
                    continue
                }
                // result.push(numbers[i])
                result.push(numbers[i])
            }

            return result
            // Change code above this line
        }
        // Задача № 24
        function checkFruit(fruit) {
            const fruits = ["apple", "plum", "pear", "orange"];

            return fruits.includes(fruit); // Change this line
        }

        // Задача № 25 
        function getCommonElements(array1, array2) {
            // Change code below this line
            let result = [];
            for (let i = 0; i < array1.length; i += 1) {
                if (array2.includes(array1[i])) {
                    result.push(array1[i])
                }
        
            }
            return result

            // Change code above this line
        }
        // Задача № 26 
        function calculateTotalPrice(order) {
            let total = 0;
            // Change code below this line

            for (let orders of order) {
                total += orders;
            }

            // Change code above this line
            return total;
        }
        // Задача № 27 
        function filterArray(numbers, value) {
            // Change code below this line
            const filteredNumbers = [];

            for (let number of numbers) {
                const result = number;

                if (result > value) {
                    filteredNumbers.push(number);
                }
            }

            return filteredNumbers;
            // Change code above this line
        }
        // Задача № 28 
        const a = 3 % 3;
        const b = 4 % 3;
        const c = 11 % 8;
        const d = 12 % 7;
        const e = 8 % 6;
        // Задача № 29 
        function getEvenNumbers(start, end) {
            // Change code below this line
            let result = [];
            for (let i = start; i <= end; i += 1) {
                if (i % 2 !== 0) {
                    continue
                }
                result.push(i)
            }

            return result
            // Change code above this line
        }
        // Задача № 30 
        const start = 6;
        const end = 27;
        let number;

        for (let i = start; i < end; i += 1) {
            if (i % 5 === 0) {
                number = i;
                break
            }
        }
        // Задача № 31 
        function findNumber(start, end, divisor) {
            // Change code below this line
            let number;

            for (let i = start; i < end; i += 1) {
                if (i % divisor === 0) {
                    number = i;
                    return number;
                }
            }

  
            // Change code above this line
        }
        // Задача № 32 
        function includes(array, value) {
            // Change code below this line
            for (let arrays of array) {
                if (arrays === value) {
                    return true
                }
            }
            return false
            // Change code above this line
        }

