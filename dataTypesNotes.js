console.log('Hello, world!')

let = firstName = 'Lucas'
firstName = 'Carl' //variable changes value
console.log(firstName)

const PI = 3.14 //not allowed to reassign
console.log(PI)

let nums = [1, 2, 3]

nums [0] = 10 // modifying pos 0
console.log(nums) // [10, 2, 3]

console.log(typeof 'Asabeneh') // string
console.log(typeof 5) // number
console.log(typeof true) // boolean
console.log(typeof null) // object type
console.log(typeof undefined) // undefined


// Non-primitive data types cannot be compared by value...
// ...even if two non-primitive data types have the same properties and values
let numsTwo = [1, 2, 3]
let numbers = [1, 2, 3]
console.log(nums == numbers) //false

let userOne = {
    name:'Lucas',
    role:'DEV',
    country: 'BR'
}

let userTwo = {
    name:'Lucas',
    role:'DEV',
    country: 'BR'
}

console.log(userOne == userTwo) // false

/*-------------------------------------------------------*/

console.log(Math.round(PI))                // 3 to round values to the nearest number

console.log(Math.round(9.81))              // 10

console.log(Math.floor(PI))                // 3 rounding down

console.log(Math.ceil(PI))                 // 4 rounding up

console.log(Math.min(-5, 3, 20, 4, 5, 10)) // -5, returns the minimum value

console.log(Math.max(-5, 3, 20, 4, 5, 10)) // 20, returns the maximum value

const randNum = Math.random() // creates random number between 0 to 0.999999
console.log(randNum)

// Let us  create random number between 0 to 10

const num = Math.floor(Math.random () * 11) // creates random number between 0 and 10
console.log(num)

//Absolute value
console.log(Math.abs(-10))      // 10

//Square root
console.log(Math.sqrt(100))     // 10

console.log(Math.sqrt(2))       // 1.4142135623730951

// Power
console.log(Math.pow(3, 2))     // 9

// Logarithm
// Returns the natural logarithm with base E of x, Math.log(x)
console.log(Math.log(2))        // 0.6931471805599453
console.log(Math.log(10))       // 2.302585092994046

// Returns the natural logarithm of 2 and 10 respectively
console.log(Math.LN2)           // 0.6931471805599453
console.log(Math.LN10)          // 2.302585092994046

// Trigonometry
Math.sin(0)
Math.sin(60)

Math.cos(0)
Math.cos(60)

/*-------------------------------------------------------*/

