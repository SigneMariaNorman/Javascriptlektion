/**
 * Prompt for user choice of weapon
 * SET variable to userChoice
 * Random computers weapon
 * Set variable to computerChoice
 * Determine winner by if-statements
 * Show winner
 */



const userChoice = prompt('Välj vapen: sten, sax eller påse'); //Möjliga värden: "sten", "sax" eller "påse"
console.log(userChoice);




let computerChoice;
function selectComputerWeapon() {
    const randomNumber = Math.floor(Math.random() * 3); //Slumpa ett tal mellan 0-3. Möjliga värden 0, 1, 2
console.log(randomNumber);
if (randomNumber == 0) {
    computerChoice = "sten";
} else if (randomNumber == 1) {
    computerChoice = "sax";
} else if (randomNumber == 2) {
    computerChoice = "påse";
}
}
console.log("Användarens val: ", userChoice);
console.log("Datorns val ", computerChoice);



if (userChoice == "sten") {
   if (computerChoice == "sten") {
    console.log("Oavgjort");
   } else if (computerChoice == "sax"){
    console.log("Jag vann!");
   } else if (computerChoice == "påse") {
    console.log("Datorn vann!");
   }

} else if(userChoice == "sax") {
if (computerChoice == "sax") {
 console.log("Oavgjort!");
   } else if (computerChoice == "påse"){
    console.log("Jag vann!");
   } else if (computerChoice == "sten") {
    console.log("Datorn vann!");
   }

} else if (userChoice == "påse") {
if (computerChoice == "påse") {
 console.log("Oavgjort!");
   } else if (computerChoice == "sten"){
    console.log("Jag vann!");
   } else if (computerChoice == "sax") {
    console.log("Datorn vann!");
   }
}
function selectComputerWeapon() {

}

function determineWinner() {}
determineWinner();