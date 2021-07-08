let x, y, z;
console.log(x);
x = 4;
y = 5;
z = x + y;
console.log(Math.max(3, 2, x, y, 5, 2));
console.log(Math.min(x, y ,z));
let str = "100";
let strIntoNum = parseInt(str, 10); // always use 
//0 - 9 -> 10 
//0,1 -> 2
// 0 - F -> 16
console.log(strIntoNum);
console.log(parseInt(strIntoNum)); // more of a clever way of converting and proceeding to print
let strIntoNum1 = +str; // never use 
console.log(strIntoNum1);
let strIntoNum2 = str * 1; // we don't use 
console.log(strIntoNum2);
let strIntFloat = parseFloat(str);
console.log("parseFloat", strIntFloat);
console.log( ((x+y)/ (z + 2,44)) * 29 + x);
//
//
// Number + String 
let  d, f ,r ;
d = "H";
f  = 33;
console.log(d + f);
//
// Number + Boolen 
r = true; // true = 1, false = 0 (value of the boolean values)
console.log(f + r); // 33 + 1 = 34 
//
// String + String
let str1 = "Hi,";
let str2 = " I am Sergio";
console.log(str1 + str2);
//
// ++ --
let a = 1;
console.log(a++);
console.log(a);
console.log(++a);
//
//Typeof 
let q = 3;
console.log(q--);
console.log(q);
console.log(--q);
//
// Typeof
console.log(typeof str1);
console.log(typeof x);
console.log(typeof console.log);
console.log(typeof console);
console.log(typeof Math.ceil);
console.log(typeof Math);
//
// 3.444444444444444
// (0.1 * 0.2)l 
console.log(0.1 * 0.2);
let floatNum1 = 0.1;
let floatNum2 = 0.2;
let result = floatNum1 + floatNum2;
console.log(result);
// toFixed()
let num = 4;
console.log(result.toFixed(num)); // Use the variable to determine how much to trim from the decimal number
//or 
console.log(result.toFixed(6)); // Manually trim the decimal 
//
// Math Random
// Math.random() * 100 == 0 - 99;
// (Math.random() * 100) +1
// 
console.log(Math.floor(Math.random( )* 6) +1);
//
console.log(1==1);
console.log(1 != 2);
console.log(1 == 1 && 1 == 10);
// 
//and &&
//true && false ==> false
//true && true ==> true
//false && flase ==> false
//true && true ==> true
// or ||
//true || false ==> true
//false || true ==> true
//true || true ==> true 
//false || false ==> false
console.log(1 == 20 || 1 == 1 && 1 != 209); // false || true && true 
//
//Practicing with the && and ||
//
let bool1, bool2, bool3;
bool1 = true;
bool2 = false;
console.log(bool1 && bool2 ? "cool" : "not cool");
console.log(bool1 || bool2 ? "cool" : "not cool");
//
// ===  and ==
//
let numInStr = "10";
let numb = 10;
console.log(numInStr == numb ? "cool" : "not cool");
console.log(numInStr === numb ? "cool" : "not cool");
// 1 = true
// 0 = false
// "" = false 
// " ", "H" = true
// true = true 
// false = false
// object = true
// null = false 
// 
//
console.log(Math ? "yeah it's true" : "Noooo")
//
//
//Math.fround Function
// 
console.log(Math.fround(7.09877));
console.log(Math.fround(568));
console.log(Math.fround(25.52));
// Notes: 
//1- According to MDN Web Docs, this function is not supported in Internet Explorer.
//2- 32 bit single precsion means 15 numbers in the decimal part of the number.
//
