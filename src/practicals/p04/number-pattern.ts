// Write your code below
let input = process.argv[2];
if (Number.isNaN(input) || input <= 0){
    process.exit();

}
let out = '';
for (let i = input; i > 0; i--){
    for (let j = i; j > 0; j--){
        out += j
    }
    out += '\n'
} console.log(out);