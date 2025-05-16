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

let operator = 'subtract';

if (operator == 'subtract' ) {
    subtract(40, 70);
} else if(operator == 'add') {
    add(40, 70);
}


