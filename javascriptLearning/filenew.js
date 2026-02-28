console.log("Hello Friend!")

//Functional and global variables

var x = 10;

//Function declaration in javascript
function checkingFunctionalVar(){
    var y = 20; //Scope of this variable stays inside the function only

    console.log(y)
};

console.log(x)
//console.log(y) -> This will cause the compilation error because the variable is being called outside of the declared function 
checkingFunctionalVar();

var stringVariableThis = "This is a string function";

function changingStringValue(){
stringVariableThis = 30;
};

changingStringValue();
console.log(stringVariableThis)

//Variable defining with same name / declaring variable again with same name
var exampleVariable = "This variable was declared to check the same variable name initialization";
var exampleVariable = "Now the variable value is being changed for the same name variable / assigned new value to the variable";

console.log(exampleVariable) //This printed the latest assigned value / or latest pointed value

//Assigning new value for the variable
exampleVariable = "Here now the value have changed again as assigning new value to variable"

console.log(exampleVariable)