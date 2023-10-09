let score = "23abc"

console.log(typeof score);
console.log(typeof(score));

let thevalueInnumber = Number(score)

console.log(typeof thevalueInnumber);
console.log(thevalueInnumber);



//conversion
// 33 => 33
// "33abcx" => NaN(Not a Number)
// true => 1 / false => 0
// null => 0
// undefined => NaN


let LoggedIn = "abc"
let booleanLoggedIn = Boolean(LoggedIn)
console.log(booleanLoggedIn);

// 1 => true  / 0 => false
//"" => false
//"abc" => true

let number= 50

let stringNumber = String(number)
console.log(stringNumber);
console.log(typeof stringNumber);

// -----------------operation------------------------

let str1 = "hi"
let str2 = " abc"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" +2 + 2);
console.log(1 + 2 + "2");

console.log((3 +5) * 4 % 2);

console.log(+true);//this work
//console.log(true+); this not work
//console.log(+"");

let gameCounter = 10
gameCounter++;
console.log(gameCounter);



