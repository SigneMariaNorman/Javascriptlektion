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

