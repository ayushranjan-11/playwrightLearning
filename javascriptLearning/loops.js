/*
1. Javascript has loop as for of, java had for each
*/

// for(let a =1; a<=10; a++){
// console.log("Checking loop in js")
// };


function writingTablesForProvidedNumber(tableNumber, tillCount) {

    for (let a = 1; a <= tillCount; a++) {
        console.log(tableNumber + " * " + a + " = " + tableNumber * a);
    }
};

//Table print with for of loop


function tablePrinting(number, tableLimiter){

    for(let i = 1; i<=tableLimiter; i++){
        console.log(number + " * "+ i + " = " + number*i)
    }
};

tablePrinting(2,10)

//writingTablesForProvidedNumber(2,20);

function findInterestPercentage(principalAmount, amountPaidAsInterest) {

    let percentage = (amountPaidAsInterest * 100) / principalAmount * 12;

    return percentage;
};

// console.log(findInterestPercentage(15037, 38));

function findInterestAmount(principalAmountNew, interestPercentage) {

    let interestAmountPerAnnum = (principalAmountNew * (interestPercentage / 100));

    return interestAmountPerAnnum;
};

// console.log(findInterestAmount(15037, 3));

//Experimenting with arrays

let arrayIs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let arrayNew = [1, "Checking", true, 3.14, false];

function arrayExperiment(arrayToExperiment) {
    for (let a = 0; a < arrayToExperiment.length; a++) {
        console.log(arrayToExperiment[a])
    };
};

//Defined array can be loop with for of loop in js

function arrayLoopingWithForOf(arrayToExperiment){

    for(let a of arrayToExperiment){ //This can loop for the array
        console.log(a)
    }
};

arrayLoopingWithForOf(arrayNew);

// arrayExperiment(arrayIs);

//Iterating the above example in simple way for js

// console.log("Printing the array content in easy way")
// for(let b of arrayIs){
//     console.log(b)
// };

// console.log("Printing the array content which contains different data types")
// for(let b of arrayNew){
//     console.log(b)
// };

//Checking while loop
function whileLoopCheck(loopLimit) {

    while (loopLimit <= 10) {
        console.log(loopLimit);
        loopLimit++;
    };
};
//whileLoopCheck(1);

//Checking do while loop
function doWhileLoop(loopLimitNew) {

    do {
        console.log("Print is from do while loop");
        console.log(loopLimitNew);
        loopLimitNew++;
    } while (loopLimitNew <= 10);
};
//doWhileLoop(1);

//If we have object created of variable and want to check the specfic then we can loop it

let person = {
    name: "Hamza Ali Mazari",
    occupation: "Sher-a-baloch",
    work: "Pak muktakbir"
};

for (let r in person) {
    //Here i want to check the content of the object and then proceed further
    if (r === "occupation") {
        console.log(person[r]);
    };
};
