let challenge = '30 Days Of JavaScript'
let brands = 'Facebook, Microsoft, nVidia, AMD'
let senteceOne = 'You cannot end a sentence with because because because is a conjunction'
console.log(challenge)
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())

console.log(challenge.substr(3, 4))
console.log(challenge.substring(3, 7))
console.log(challenge.substring(3))
console.log(challenge.includes('Script'))

console.log(challenge.split())
console.log(challenge.split(' '))
console.log(brands.split(','))

console.log(challenge.replace('JavaScript', 'Phyton'))
console.log(challenge.charAt(15))

console.log(challenge.indexOf('J'))
console.log(challenge.charCodeAt(11))

console.log(challenge.lastIndexOf('a'))

console.log(senteceOne.indexOf('because'))
console.log(senteceOne.lastIndexOf('because'))
console.log(senteceOne.search('because'))

console.log(challenge.startsWith('30'))
console.log(challenge.endsWith('JavaScript'))

console.log(challenge.match(/a/))

console.log(challenge.concat(' for', ' Buxk.'))
console.log(challenge.repeat(3))