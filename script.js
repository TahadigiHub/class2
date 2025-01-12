// Program 1
// let i = 1;
// let n = 100;
// while (i <= n) {
//     console.log(i);
//     i++;
// }
// Program 2
// let i = 10;
// n = 1;
// while (i >= n) {
//     console.log(i);
//     i--;
// }
// Program 3
// var i = "a".charCodeAt(0);
// var n = "z".charCodeAt(0);
// while (i <= n) {
//     console.log(String.fromCharCode(i));
//     i++;
// }
// Program 4
// var i = 1;
// var n = 100;
// while (i <= n){
//     if (i % 2 == 0) {
//         console.log(i);  
//     }
//     i++;
// }
// Program 5
// var i = 1;
// var n = 100;
// while (i <= n) {
//     if (i % 2 != 0) {
//         console.log(i);
//     }
//     i++;
// }
// Program 6
// var i = 1;
// var n = 10;
// var sum = 0
// while (i <= n) { 
//     sum = sum + i;
//     i++;
// }
// Program 7
// console.log("Sum of all natural numbers from 1 to 10 is:" + sum);
// var userInput = prompt("Enter number to get table")
// var i = 1;
// var n = 10;
// while (i <= n) {
//     let mul =userInput * i
//     i++;
//     console.log(userInput + "*" + i + "="  + mul);
// }
// Program 8
// var i = 1;
// var n = 10;
// var sum = 0;
// while (i <= n) {
//     if (i % 2 != 0) {
//         sum = sum +i;
//     }
//     i++;}
//     console.log("sum of all odd numbers from 1 to 10 is:" + sum);

// Program 9
// var i = 1;
// var n = 100;
// var sum = 0;
// while (i <= n) {
//     if (i % 2 == 0){
//         sum = sum + i;
//     }
//     i++;
// }
// console.log("sum of all even numbers from 1 to 100 is:" + sum);
// progarm 10
var userInput = prompt("Enter numbers to count digts of number");
var i = 0;
while (userInput > 0) {
    userInput  = parseInt(userInput / 10);
   i++;
}
console.log("Numbers of digits in given number is:" + i);
