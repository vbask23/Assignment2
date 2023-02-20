let num1 = parseInt(prompt('Enter the first integer: '));
let num2 = parseInt(prompt('Enter the second integer: '));
if (num1 > num2) {
    document.write(`${num1} is the greater number.`)
}  else if (num1 === num2) {
    document.write("The numbers are equal.")
} else {
    document.write(`${num2} is the greater number.`)
}