//map function allows to perform action in an arrays

let arrayAgain = [1, 3.4, 5, 7, 8, 22];

let arrayPostAction = arrayAgain.map((arrayElement) => arrayElement * 2);

console.log(arrayPostAction);

//Letter to asci code convertor

let constantArray = ["a", "y", "u", "s", "h"];

function constToAsciConvertor(arrayElementToPass) {
  let tempChar = arrayElementToPass;
  return tempChar.charCodeAt(tempChar);
}

let constantUniCode = constantArray.map(constToAsciConvertor);

console.log(constantUniCode);

const asciiCode = constantArray.map((char) => char.charCodeAt(0));

console.log(asciiCode);

//Farenheit to Celcius convertor

let farenheitTemps = [98, 99, 100, 101, 102];

function fareheitToCelcius(temperature) {
  return (temperature - 32) * (5 / 9);
}

let farenheitToCelciusConverted = farenheitTemps.map(fareheitToCelcius);

console.log(farenheitToCelciusConverted);
