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
    stringVariableThis.concat("checking space and string concatination");
    console.log(stringVariableThis);
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

//Difference on let and var
let aa = 10; //let cannot be defined again and again
//let a = 20;  This will give error

function checkingVarAndInt(){
     var b = 22;

    {
        let a = 23;
    }
    //console.log(a) The a with value 23 is not being refrerenced outside the block but var can be referenced, hence gives referenceerror in console
};

checkingVarAndInt();
console.log(aa)

//Let see const:
//These are used for fixed value, where the value cannot be changed
const checkingConstant = "ABCD";

//checkingConstant = "EFGH"; This is not allowed as new value are not allowed to be assigned in the constant variable

//I think, action is not allowed to perform any value action for const
checkingConstant.concat("E");
console.log(checkingConstant)

let defaultValueCheckForLet;
var defaultValueCheckForVar;
//const defaultValueCheckForConst; Const variable should have value assigned

//Undefined is the default value for let and var
console.log(defaultValueCheckForLet);
console.log(defaultValueCheckForVar);
