let array1 = [];

//push(parameter is allowed to pass) -> To add an element in an array, unlike java specific data type is not defined here so, mix of different data's can be added in a single array

array1.push(1, 2, 3, 4, 5, 6, 7, 8, 9) //Through this way single and multiple elements can be added in an array

console.log("-------push() output-------")

console.log(array1)

array1.push("Adding string in an integer array")

console.log(array1) //this prints the array content of array1 with integer and string which is not common for java learners eyes

//pop(do not accept any parameter) -> To remove an element in an array, unlike java specific data type is not defined here so, mix of different data's can be added and removed in a single array

array1.pop()

console.log("-------pop() output-------")

console.log(array1) //pop doesn't accept any parameter, it removes the last element from an array

//shift(do not accept any parameter) -> This takes the first element of the array and return it, also removes the first element from an array and array get updated with first element removed, this also accepts no parameter

let shiftCheck = ["This will be removed", 1.2, true, "Last element"]

let firstElementFromShiftCheckArray = shiftCheck.shift() //We can take or keep the return element from an array in new variable

console.log("-------shift() output-------")

console.log(firstElementFromShiftCheckArray) //This prints the removed element from an array

console.log(shiftCheck) //This gave back the remaining element from an array

let shiftCheckNew = []

let firstElementFromShiftCheckArrayNew = shiftCheckNew.shift() //This get compiled successfully even though no element is present in an array

console.log(firstElementFromShiftCheckArrayNew) //Returns undefined as output

console.log(shiftCheckNew) //Returns []

//unshift() -> In an array this adds the passed parameter on 1st place, can be passed single or multiple parameter

shiftCheckNew.unshift("Old array updating", "with entries")//This updates the array shiftCheckNew with these entries

console.log("-------unshift() output-------")

console.log(shiftCheckNew)

//splice() -> To add or remove an element in an array from a certain position

const spliceCheckArray = [1, 2, 4, 5, 6, 7]

//Now here I want to add three

spliceCheckArray.splice(2, 0, 3) //What this did is, The first (2), is for the array position where action should start to take, 
//Second (0) is for how many position or element from the defined postion content need to be deleted or removed from an array
//Third (3) is the actual content which is added in an array, not the postion, the actual content, can be of any data types for js.

console.log("-------splice() output-------")

console.log(spliceCheckArray)

//Interestingly array index out of bound, case is not here, what I mean is ->

spliceCheckArray.splice(9, 2, 8) //Here I have intentionally provided the position and count out of range from the current array to see if any error is thrown

console.log("This is adding element 8 " + spliceCheckArray) //Instead, (8) get added in an array successfully

//Let's try with -ve value passing

spliceCheckArray.splice(-7, -2, 9) //For this value is not added, but also the compilation or run time error is also not shown

console.log(spliceCheckArray) //Strangely it is adding the value 9, in between 1 and 2. Output -> [ 1, 9, 2, 3, 4, 5, 6, 7, 8 ]
/*
The reason for the 9 being added in the 2 position of an array is because
whem we provide the -ve input for start and deleteCount:
The start is calculates as:
-7 (or the input provided) + array.length(), and if the calculation is still less than 0 then, 0 is taken as number
-7 + 6 = -1 -> 0

Step 1: Normalize the start index
Your array has length = 6
You passed start = -7
JS converts negative indices by adding the array length:
start = -7 + 6 = -1 → still negative!
Rule: If start < 0 after adjustment, it becomes 0
📌 So: start = Math.max(0, -7 + 6) = Math.max(0, -1) = 0
✅ Final start = 0

The deleteCount calculation is:
If input / number provided is less than 0 then, 0 is taken
Step 2: Normalize the deleteCount
You passed deleteCount = -2
Rule: If deleteCount < 0, it is treated as 0
*/

//slice() -> 