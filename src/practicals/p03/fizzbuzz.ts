// Write your code below
let input = process.argv[2];

if (Number.isNaN(input) || input <= 0) {
    process.exit();

}

for (let i = 1; i <= input; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");

    } else if (i % 3 === 0) {
        console.log("Fizz");

    } else if (i % 5 === 0) {
        console.log("Buzz");

    } else if (!(i % 3 === 0 || i % 5 === 0)) {
        console.log(`${i}`);
    }
}