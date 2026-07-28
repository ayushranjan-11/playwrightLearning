/* Learning till now:
1. To print - console.log()

2. var is re-declaration - Ex: var a = 3; var a = 5; {now the var with 3 value is redeclared}

3. let is commonly used in modern js, let do not allow re-declaration concept

4. variables declared globally and block scoped
    global declared variables can be accessed anywhere
    block scoped variables cannot be accessed outside of the scope
    Example: 
    let globalVariable = 5;
    fuction trappingScoppedVariable() {
    let scoppedVariable = 9;
    console.log(scoppedVariable) //Prints 9
    console.log(globalVariable) //Prints 5
    }
    console.log(globalVariable) //Print 5
    console.log(scoppedVariable) //Will through error

5. const is used to decalare the value which will be not allowed to assign new value
    Example: const a = 9;
    console.log(a)
    a = 9+1; //This action will not be allowed for the const, new assignment is not allowed for const
    console.log(a)

6. folder back option -> cd ..

7. default value for var and let will be undefined, const don't allow to have undefined value as default

8. Adding values like 3 and a for the same let variable, is allowed in the JavaScript


*/


//console.log("Hello Friend!")

//Functional and global variables

var x = 10;

//Function declaration in javascript
function checkingFunctionalVar() {
    var y = 20; //Scope of this variable stays inside the function only

    //console.log(y)
};

//console.log(x)
//console.log(y) -> This will cause the compilation error because the variable is being called outside of the declared function 
checkingFunctionalVar();

var stringVariableThis = "This is a string function";

function changingStringValue() {
    stringVariableThis.concat("checking space and string concatination");
    //console.log(stringVariableThis);
    stringVariableThis = 30;
};

changingStringValue();
//console.log(stringVariableThis)

//Variable defining with same name / declaring variable again with same name (re-declaraction is allowed in javascript but not in java)
var exampleVariable = "This variable was declared to check the same variable name initialization";
var exampleVariable = "Now the variable value is being changed for the same name variable / assigned new value to the variable";

//console.log(exampleVariable) //This printed the latest assigned value / or latest pointed value

//Assigning new value for the variable
exampleVariable = "Here now the value have changed again as assigning new value to variable"

//console.log(exampleVariable)

//Difference on let and var
let aa = 10; //let cannot be defined again and again
//let a = 20;  This will give error because in line 48 we are again declaring the same a with new value, (let do not allow re declaration with the same name)

function checkingVarAndInt() {
    var b = 22;

    {
        let a = 23;
    }
    //console.log(a) The a with value 23 is not being refrerenced outside the block but var can be referenced, hence gives referenceerror in console
};

checkingVarAndInt();
//console.log(aa)

//Let see const:
//These are used for fixed value, where the value cannot be changed
const checkingConstant = "ABCD";
const numberCheckWithConst = 9;


//checkingConstant = "EFGH"; This is not allowed as new value are not allowed to be assigned in the constant variable

//I think, action is not allowed to perform any value action for const
checkingConstant.concat("E");
numberCheckWithConst = numberCheckWithConst + 1;
console.log(checkingConstant)
console.log(numberCheckWithConst)


let defaultValueCheckForLet;
var defaultValueCheckForVar;
//const defaultValueCheckForConst; Const variable should have value assigned

//Undefined is the default value for let and var
//console.log(defaultValueCheckForLet);
//console.log(defaultValueCheckForVar);

//Object can also be created

let person = {
    name: "Test",
    gender: "Unspecified",
    occupation: "Night manager"
};

//console.log(person);