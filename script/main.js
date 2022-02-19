//min
let sum = 0.1 + 0.2;
console.log(+sum.toFixed(1));

let ab="1";
let av=2;
console.log(+ab+av);

 let Gb =prompt('Enter the volume of the flash drive in gigabytes');
 const FILE=820;
 let nymFiles=(Gb/FILE);
 console.log(nymFiles.toFixed(0));

 //nor
 
 let user_money=prompt('What is your balance');
 const PRICE=35.5;
 let numChocolate= (user_money/PRICE);
 let Balance= (user_money% PRICE);
 console.log(`Available to you ${numChocolate.toFixed(0)} chocolates , your balance ${Balance}  `);

 let number = prompt("Enter a three-digit number");
 let firstDigit = +number % 10;
 let secondDigit = Math.floor(+number / 10) % 10;
 let thirdDigit = Math.floor(+number / 100);
 let inverseNumber = String(firstDigit) + String(secondDigit) + String(thirdDigit);
 console.log(`${number}  ${inverseNumber}.`);

 //max

 let sum_=prompt('Enter the amount of your contribution');
 let month= prompt('Specify the duration of the deposit');
 const DEP_=(0.41* month);
 let sum_depo = (sum_ /100);
 let sum_D = (sum_depo * DEP_);
 console.log(`The monetary amount of interest on the deposit months is ${sum_D.toFixed(2)}  UAH.`);

 2 && 0 && 3 //  в консолі ми отримаємо 0 

 2 || 0 || 3 //   в консолі ми отримаємо 2 

 2 && 0 || 3 //   в консолі ми отримаємо 3 





