//for loop

for(let i = 1; i <= 5; i++) {
    console.log(i)
}

console.log("------")

//while loop

let whileNum = 2

while(whileNum <= 10) {
    console.log(whileNum)
    whileNum += 2
}

console.log("------")

//do while

let doWhileNum = 1

do {
    console.log(doWhileNum)
    doWhileNum++
}while(doWhileNum <= 5)

console.log("------")

//for of (array)

let numbers = [22, 304, 34, 5, 19, 55]

//numbers.push() // add
//numbers.pop() //remove
//numbers[1] = 900

for(let number of numbers) {
    console.log(number)
}

console.log("------")

//for in (array)

for(let number in numbers) {
    console.log(number)
}


const person = {
    name : "Seth",
    age : 29,
    city: "Bham"
}

//for of (object)

for(let prop of Object.values(person)) {
    console.log(prop)
}

console.log("------")

for(let prop of Object.keys(person)) {
    console.log(prop)
}

console.log("------")

//for in (object)

for(let prop in person) {
    console.log(person[prop])
}

console.log("------")

for(let prop in person) {
    console.log(prop)
}
