//day02 LINK: https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/02_Day_Data_types/02_day_data_types.md#strings

let numS = '10'
let num =  10
let lang = 'Phyton'
let langTwo = 'Jargon'
let langSen = 'I hope this course is not full of jargon.'

console.log(typeof numS)
console.log(typeof num)
numS = Number(numS)
console.log(typeof numS) //ex03

let numD = parseFloat(9.8)
console.log(Math.round(numD))//ex04

console.log(lang.includes('on'))
console.log(langTwo.includes('on'))//ex05

console.log(langSen.includes('jargon'))//ex06

console.log(Math.round(Math.random() * 100))//ex 07, 08 e 09