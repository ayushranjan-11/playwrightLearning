// for(let a =1; a<=10; a++){
// console.log("Checking loop in js")
// };


function writingTablesForProvidedNumber(tableNumber, tillCount){

    for(let a = 1; a<=tillCount; a++){
        console.log(tableNumber +" * " + a + " = "+ tableNumber*a);
    }
};

//writingTablesForProvidedNumber(2,20);

function findInterestPercentage(principalAmount, amountPaidAsInterest){

    let percentage = (amountPaidAsInterest * 100) / principalAmount * 12;

    return percentage;
};

console.log(findInterestPercentage(15037, 38));

function findInterestAmount(principalAmountNew, interestPercentage){

    let interestAmountPerAnnum = (principalAmountNew * (interestPercentage / 100));

    return interestAmountPerAnnum;
};

console.log(findInterestAmount(15037, 3));

//Experimenting with arrays

let arrayIs = [1,2,3,4,5,6,7,8,9,10];

function arrayExperiment(arrayToExperiment) {
    for(let a = 0; a <arrayToExperiment.length; a++){
        console.log(arrayToExperiment[a])
    };
};

arrayExperiment(arrayIs);

//Iterating the above example in simple way for js

console.log("Printing the array content in easy way")
for(let b of arrayIs){
    console.log(b)
};