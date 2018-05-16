// var firstName = prompt("What's your first name?");
// var lastName = prompt("What's your last name?");
// var age = prompt("What's your age?");
// console.log("Your fullname is " + firstName + " " + lastName);
// console.log("Your age is " + age);

var age = Number(prompt("What's your age?"));
alert(age + " is roughly " + age * 365 + " days.");

// negative
if (age < 0) {
    console.log("Please input a positive number!");
}
// 21
if (age === 21) {
    console.log("Happy 21th birthday!");
}
// odd
if (age % 2 !== 0) {
    console.log("It is a odd number!");
}

if (age / Math.sqrt(age) == Math.sqrt(age)) {
    console.log("It is a perfect square.");
}

var i = -10;

while (i < 20) {
    console.log(i);
    i++;
}

var i = 10;
while (i < 41) {
    console.log(i);
    i+=2;
}

var i = 300;
while (i < 334) {
    if (i % 2 !== 0) {
        console.log(i);
    }
    i++;
}

var i = 5;
while (i < 51) {
    if (i % 5 === 0 && i % 3 === 0) {
        console.log(i);
    }
    i++;
}

for (var i = -10; i < 20; i++) {
    console.log(i);
}
for (var i = 10; i < 41; i+=2) {
    console.log(i);
}
for (var i = 300; i < 334; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }   
}

for (var i = 5; i < 51; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i);
    }   
}

function isEven(num) {
    // if (num % 2 === 0) {
    //     return true;
    // } else {
    //     return false;
    // }
    return num % 2 === 0;
}

function factorial(num) {
    var output = 1;
    while (num > 1) {
        output = output * num;
        num--;
    }
    return output;
}

function kebabToSnake(str) {
    var output = str.replace(/-/g, "_");
    return output;
}