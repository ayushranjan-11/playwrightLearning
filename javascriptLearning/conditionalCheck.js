function checkingIfElseCondition(providedInput){
    if(providedInput!= 10){
        console.log(providedInput +" is not 10")
    } else {
        console.log(providedInput +" is 10")
    }
};

checkingIfElseCondition(-52);
//Checked about the simple if else condition writing in js
/* Learnings:
1. function parameters don't require variable type to be defined
2. Values can be passed on function like, 10, "ABCD" or no passing
*/

function checkingNestedIfElse(provideInput){
if(provideInput>=1 && provideInput<3){
    console.log("The season is winter")
} else if(provideInput>=3 && provideInput<=5){
    console.log("The month is spring")
} else if(provideInput>=6 && provideInput<10) {
    console.log("The month is summer")
} else {
    console.log("Please check your input")
}

};

checkingNestedIfElse(1);

//Trying switch case in js

function tryingSwitchCase(conditionForSwitchCase){

    switch(conditionForSwitchCase){
    case 1: {
        console.log("Switch case 1 has passed");
        break;
    }
    case 2: {
        console.log("Switch case 2 has passed");
        break;
    }

    default: {
        console.log("Input didn't match for this switch case");
    }
    }
};

tryingSwitchCase(2);