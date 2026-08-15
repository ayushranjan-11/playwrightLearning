/*
If array size action is performed and start or end is given out of array arrange, {if -ve value then it is normalized with performing addition to array size and if +ve value that is out of range then it automatically takes max value of an array}
Check below for examples
*/

let array1 = [];

//push(parameter is allowed to pass) -> To add an element in an array, unlike java specific data type is not defined here so, mix of different data's can be added in a single array

array1.push(1, 2, 3, 4, 5, 6, 7, 8, 9); //Through this way single and multiple elements can be added in an array

console.log("-------push() output-------");

console.log(array1);

array1.push("Adding string in an integer array");

console.log(array1); //this prints the array content of array1 with integer and string which is not common for java learners eyes

//pop(do not accept any parameter) -> To remove an element in an array, unlike java specific data type is not defined here so, mix of different data's can be added and removed in a single array

array1.pop();

console.log("-------pop() output-------");

console.log(array1); //pop doesn't accept any parameter, it removes the last element from an array

//shift(do not accept any parameter) -> This takes the first element of the array and return it, also removes the first element from an array and array get updated with first element removed, this also accepts no parameter

let shiftCheck = ["This will be removed", 1.2, true, "Last element"];

let firstElementFromShiftCheckArray = shiftCheck.shift(); //We can take or keep the return element from an array in new variable

console.log("-------shift() output-------");

console.log(firstElementFromShiftCheckArray); //This prints the removed element from an array

console.log(shiftCheck); //This gave back the remaining element from an array

let shiftCheckNew = [];

let firstElementFromShiftCheckArrayNew = shiftCheckNew.shift(); //This get compiled successfully even though no element is present in an array

console.log(firstElementFromShiftCheckArrayNew); //Returns undefined as output

console.log(shiftCheckNew); //Returns []

//unshift() -> In an array this adds the passed parameter on 1st place, can be passed single or multiple parameter

shiftCheckNew.unshift("Old array updating", "with entries"); //This updates the array shiftCheckNew with these entries

console.log("-------unshift() output-------");

console.log(shiftCheckNew);

//splice() -> To add or remove an element in an array from a certain position

const spliceCheckArray = [1, 2, 4, 5, 6, 7];

//Now here I want to add three

spliceCheckArray.splice(2, 0, 3); //What this did is, The first (2), is for the array position where action should start to take,
//Second (0) is for how many position or element from the defined postion content need to be deleted or removed from an array
//Third (3) is the actual content which is added in an array, not the postion, the actual content, can be of any data types for js.

console.log("-------splice() output-------");

console.log(spliceCheckArray);

//Interestingly array index out of bound, case is not here, what I mean is ->

spliceCheckArray.splice(9, 2, 8); //Here I have intentionally provided the position and count out of range from the current array to see if any error is thrown

console.log("This is adding element 8 " + spliceCheckArray); //Instead, (8) get added in an array successfully

//Let's try with -ve value passing

spliceCheckArray.splice(-7, -2, 9); //For this value is not added, but also the compilation or run time error is also not shown

console.log(spliceCheckArray); //Strangely it is adding the value 9, in between 1 and 2. Output -> [ 1, 9, 2, 3, 4, 5, 6, 7, 8 ]
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

let spliceCheck = [1, 2, 3];

spliceCheck.splice(-4, 0, 4);

console.log(spliceCheck); //Output -> [ 4, 1, 2, 3 ]

//slice() -> It takes the start and end number for array list and return the array content from start to end - 1

console.log("-------splice() output-------");

let sliceArray = [1, 2, 3, 4, 5];

let sliceArrayReturn = sliceArray.slice(0, 2); //Expected, but it did not affected the array, instead start and end took the array content and returned it as new entry

console.log(sliceArray); //Thought was slice will change the content of the array, but array is as it is -> [ 1, 2, 3, 4, 5 ]

console.log(sliceArrayReturn); // Returns or stores a new array with start and end of an array -> [ 1, 2 ]

//Now if we provide index not available in the array, then what happens

let sliceArrayUnIndexed = sliceArray.slice(-3, 9);

console.log(sliceArray);

console.log(sliceArrayUnIndexed); //Output -> [ 3, 4, 5 ]
//Reason for the ouput is:
/*
Normalize indices:
start = -3 → -3 + 5 = 2
end = 9 → greater than array length → clamped to 5
So: slice(2, 5)
→ Elements at indices 2, 3, 4 → [3, 4, 5]
*/

let sliceArrayUnIndexedAgain = sliceArray.slice(-4, -1);

console.log(sliceArrayUnIndexedAgain); //Output -> [ 2, 4, 5 ]
/* Reason for the output is:
Normalize:
start = -4 → -4 + 5 = 1
end = -1 → -1 + 5 = 4
So: slice(1, 4)
→ Indices 1, 2, 3 → [2, 3, 4]

*/

//I wanted to check on one case where start and end eventually point to the same array index

let arrayIndexSame = [1, 2, "ab", "cd"];

let arrayIndexSamePostAction = arrayIndexSame.slice(2, 3);

console.log(arrayIndexSame);

console.log(arrayIndexSamePostAction);

let arrayIndexSamePostActionWithNegative = arrayIndexSame.slice(-2, -1);

console.log(arrayIndexSamePostActionWithNegative);

//concat(); -> It use to add two array, also it returns a new array

console.log("-------concat() output-------");

let toAdd = [1, 2, 3, 4];
let toBeAdded = ["a", "b", "c"];

let arrayResult = toAdd.concat(toBeAdded);

console.log(arrayResult);
console.log(toBeAdded.concat(toAdd));

let emptyArray = [];

console.log(toBeAdded.concat(emptyArray));

//Can we add array and non array with concat?

let nonArray = 90;

console.log(toBeAdded.concat(nonArray)); //Yes we can, Output -> [ 'a', 'b', 'c', 90 ], it get added as array item

//Checking if concat will update the old array with new entry, ofcourse it will. It depends on the concat return array is where redirected to whether to new variable or already existing one

let oldArray = [1, 2, 3, 4];

let arrayEntryToBeAdded = ["a", "b", "c", "d"];

oldArray = oldArray.concat(arrayEntryToBeAdded);

console.log(oldArray);

//indexOf(); -> Returns the first index at which a given element can be found in an array, return -1 for non matching

console.log("-------indexOf() output-------");

let indexArray = ["1", 2, 4, 5, 6, 4, 3];

console.log(indexArray.indexOf("1"));

//Got to know about the case where, if array conent is duplicate then finding the next element position, because indexOf returns 1st index

let duplicateContentArray = [1, 2, 4, 5, 4, 1];

//Find the 2nd position of 4 & 1
//
console.log(
  duplicateContentArray.indexOf(4, duplicateContentArray.indexOf(4) + 1),
);

console.log(
  duplicateContentArray.indexOf(5, duplicateContentArray.indexOf(5) + 1),
); //If index is not found then it returns -1 as arrayResult

//includes(); -> Returns the first index at which a given element can be found in an array, return -1 for non matching

console.log("-------includes() output-------");

let includeArray = [1, 2, "abcd", 3.1476, true];

console.log(includeArray.includes(1));

console.log(includeArray.includes(1, 1));

console.log(includeArray.includes(11, 2));

console.log(
  includeArray.includes(true, "instead of index position, giving random input"),
); //Returns true, because the element is available in the array, and for index it was set to 0

//forEach(); -> Returns the first index at which a given element can be found in an array, return -1 for non matching

console.log("-------forEach() output-------");