function add(numberOne, numberTwo) {
    console.log('Add');
    console.log('NumberOne är', numberOne);
    console.log('numberTwo är', numberTwo);
    let sum = numberOne + numberTwo;
   
    console.log("summan blir: " + sum);
}

function subtract(numberOne, numberTwo) {
    console.log('Subtract')
    let sum = numberOne - numberTwo;

    console.log("Summan blir: " + sum);
}

const inputMunber = prompt('Välj första nummer');
console.log('Första nummer: ', inputNumberOne);
const inputOperator = prompt("Välj addering (+) eller subtrahering (-)");
console.log("Operator:", inputOperator);
const inputNumberTwo = prompt("Välj andra nummer");
console.log('A nummer: ', inputNumberTwo);

if (inputOperator == '+') {
    add(inputNumberOne, inputNumberTwo);
} else if (inputOperator == '-'){
    subtract(inputNumberOne, inputNumberTwo);
}
