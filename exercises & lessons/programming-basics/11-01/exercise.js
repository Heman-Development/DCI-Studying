/* The odd/even reporter. 
Write a program that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. “2 is even”). */


for (i = 0; i <= 20; i++) {
    if ( i % 2 == 0) {
        console.log(`${i} is even`);
    }else {
        console.log(`${i} is odd`);
    }
}



/* Write programs that produce the following outputs:*/
//100 200 300 400 500 600 700 800 900 1000

//0 2 4 6 8 10
let text = "";
for (let i = 0; i <= 10; i ++); {
    if (i % 2 == 0) {
        // text = text + i + " "; 
        text += i + " ";
    }
}
console.log(text);
console.log("-----------")

//3 6 9 12 15

text = "";
for (let i = 1; i <= 15; i++) {
    if (i % 3 == 0) {
        text += i + " ";
    }
}
console.log(text);
console.log("-----------")
//9 8 7 6 5 4 3 2 1 0

text = "";
for (let i = 9; i >= 0; i--) {
    text += i + " ";
}
console.log(text);
console.log("-----------")
//1 1 1 2 2 2 3 3 3 4 4 4
text = "";
for (let i = 1; i <= 4; i++) {
    for (let j = 0; j < 3; j++) {
        text += i + " "; 
    }
}
console.log(text);
console.log("-----------")
//0 1 2 3 4 0 1 2 3 4 0 1 2 3 4 
text = "";
for (let i = 1; i <= 4; i++) {
    for (let j = 0; j <= 4; j++) {
        text += j + " "; 
    }
}
console.log(text);
console.log("-----------")

// 1 1 1 2 2 2 3 3 3 4 4 4
let countNum = 0 ;
text = "";
for (let i = 1; i <= 4; ) {
    text += i + " ";
    if (countNum !== 0 && countNum % 3 == 0){
        i++; 
        countNum = 0;
}
    countNum++; 
}
console.log(text);

console.log("1".repeat(3));
console.log("2".repeat(3));

//Split and Join
let sentenceStr = "Hi this is me I am an aspiring web developer";
let sentenceToArr = sentenceStr.split(" ");
console.log(sentenceToArr);
let backToStr = sentenceToArr.join(" ");
console.log(backToStr);


 /* let numbersArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15];

const produceOutputs = () => {

    for (i = 1; i <= numbersArr[10]; i++) {
       console.log(i *100);
    } 

    for (i = 0; i <= numbersArr[10]; i++) {
        if (i % 2 == 0) {
            console.log(numbersArr[i]);
        }else {

        }
    }

    for (i = 1; i <= numbersArr[5]; i++) {
        console.log(i * 3); 
}
produceOutputs(); */



 const countOccurances = (str,chr) => {
     let strIntoArr = str.split("");
     console.log(strIntoArr);
     let count = 0;
     for (let i = 0; i <strIntoArr.length; i++) {
         if (strIntoArr[i] == ch) {
             count ++;
         }
     }
     console.log(count);
 }


 // 1 1 1 2 2 2 3 3 3 4 4 4

 const repeatingNumbers = () => {
    text = "";
    for (let i = 1; i <= 4; i++) {
        w = i * 111;
        text += w;
    }
    texrIntoArr = text.split("");
    backToText = texrIntoArr.join(" ");
    console.log(backToText);
    }
    
repeatingNumbers();


//1 1 1 2 2 2 3 3 3 4 4 4

let countNum1 = 1;
text = "";
for (let i = 1; i <= 4; ) {
  text += i + " ";
  if (countNum1 !== 0 && countNum1 % 3 === 0) {
    i++;
    countNum1= 0;
  }
  countNum1++;
}
console.log(text);
