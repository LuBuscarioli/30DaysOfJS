console.log('Hello, world!')

let = firstName = 'Lucas'
firstName = 'Carl' //variable changes value
console.log(firstName)

const PI = 3.14 //not allowed to reassign
console.log(PI)

let nums = [1, 2, 3]

nums [0] = 10 // modifying pos 0
console.log(nums) // [10, 2, 3]


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