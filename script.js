
// Program 1
// var user1Input = prompt("Enter Number1")
// var user2Input = prompt("Enter Number2")
// if(user1Input > user2Input){
// console.log("Number1 is Maximam");
// }else if(user2Input > user1Input){
// console.log("Number2 is Maximum");
// }else{
//     console.log("Invalid input");
// }
// Program 2
// var user1Input = prompt("User 1 enter number")
// var user2Input = prompt("User 2 enter number")
// var user3Input = prompt("User 3 enter number")
// if(user1Input >= user2Input && user1Input >= user3Input){
//     console.log("User1 value will be maximum");
//     }
//    else if(user2Input >= user1Input && user2Input >= user3Input){
//         console.log("User2 value will be maximum");
//     } else{
//             console.log("User3 value will be maximum");
//             }
// Program 3
// var user1Input = prompt("Enter a Number")
// if(user1Input >= 0){
//     console.log("Positive");
// }else if (user1Input < 0) {
//     console.log("Negative");
// } else {
//     console.log("Invalid input");
// }
// Program 4
// var user1Input = prompt("Enter a Number divisible by 5,11.")
// if(user1Input % 5 == 0){
//     console.log("Divisible by 5");
// }else if(user1Input % 11 == 0){
//     console.log("Divisible by 11");
// }else{
//     console.log("Invalid input");
// }
// Program 5
// var user1Input = prompt("Enter a number")
// if(user1Input % 2 == 0){
//     console.log("Number is Even");
// }else {
//     console.log("Number is Odd");
// }
// Program 6
// var user1Input = prompt("Enter year to check is leap or not!")
// if(user1Input % 4 == 0){
//     console.log("It is Leap year");
// }else if (user1Input % 4 != 0) {
//     console.log("It is not a leap year");
// }
// else{
//     console.log("Invalid input");
// }
// Program 8
// let alphabet = prompt("Enter an alphabet:").toLowerCase();
// if (alphabet.length === 1 && /[a-z]/.test(alphabet)) {
//     if ("aeiou".includes(alphabet)) {
//         console.log(`${alphabet} is a vowel.`);
//     } else {
//         console.log(`${alphabet} is a consonant.`);
//     }
// } else {
//     console.log("Invalid input! Please enter a single alphabet.");
// }
// Program 9
// var user1Input = prompt("Enter week number between 1-7")
// if(user1Input == 1){
//     console.log("Sunday");
// }else if (user1Input == 2) {
//     console.log("Monday");
// } else if (user1Input == 3) {
//     console.log("Tuesday");
// } else if (user1Input == 4) {
//     console.log("Wednesday");
// } else if (user1Input == 5) {
//     console.log("Thursday");
// } else if (user1Input == 6) {
//     console.log("Friday");
// } else if (user1Input == 7) {
//     console.log("Saturday");
// } else {
//     console.log("Invalid week number please enter between 1-7");
// }
//   Program 10
// var user1Input = prompt("Enter month number between 1-12.")
// if(user1Input == 1 || user1Input == 3){
//     console.log("31 days");
// }else if (user1Input == 5 || user1Input == 7) {
//     console.log("31 days");
// } else if (user1Input == 8 || user1Input == 10) {
//     console.log("31 days");
// } else if (user1Input == 12) {
//     console.log("31 days");
// } else if (user1Input == 2) {
//     console.log("28 days");
// } else {
//     console.log("30 days");
// }
// Program 11
// let angle1 = parseInt(prompt("Enter the first angle of the triangle:"));
// let angle2 = parseInt(prompt("Enter the second angle of the triangle:"));
// let angle3 = parseInt(prompt("Enter the third angle of the triangle:"));
//     if (angle1 <= 0 || angle2 <= 0 || angle3 <= 0) {
//         console.log("Angles must be positive values.");
//     } else if (angle1 + angle2 + angle3 === 180) {
//         console.log("The triangle is valid.");
//     } else {
//         console.log("The triangle is not valid. The sum of the angles must be 180 degrees.");
//     }
// program 12
// var side1 = prompt("Enter first side")
// var side2 = prompt("Enter second side")
// var side3 = prompt("Enter third side")
// if(side1 < 0 || side2 < 0 || side3 < 0){
//     console.log("Length of sides must be positive");
// }else if (side1 + side2 > side3 && side2 + side3 > side1 && side1 + side3 > side2) {
//     console.log("Triangle is Valid");
// } else {
//     console.log("Triangle is not valid ,sum of two sides must be greater than third side");
// }
// Program 13
// var user1Input = prompt("Enter sides of triangle respectively")
// var user2Input = prompt("Enter sides of triangle respectively")
// var user3Input = prompt("Enter sides of triangle respectively")
// if(user1Input == user2Input && user1Input == user3Input && user2Input == user3Input){
//     console.log("It is equilateral triangle");
// }else if (user1Input == user2Input || user1Input == user3Input) {
//     console.log("It is isoceles triangle");
// } else {
//     console.log("It is scalene triangle");
// }
// program 14
// var user1Input = prompt("Enter Selling price")
// var user2Input = prompt("Enter Cost price")
// if(user1Input > user2Input){
//     let profit = user1Input - user2Input;
//     console.log(`Profit: $${profit}`);
// }else if (user2Input > user1Input) {
//     let loss = user2Input - user1Input;
//     console.log(`Loss : $${loss}`);
// } else {
//     console.log("Selling & cost is same")
// }
// Program 15
// var user1Input = prompt("Enter marks of Physics")
// var user2Input = prompt("Enter marks of Maths")
// var user3Input = prompt("Enter marks of Biology")
// var user4Input = prompt("Enter marks of Chemistry")
// var user5Input = prompt("Enter marks of Computer")
//     let sum = user1Input + user2Input + user3Input + user4Input + user5Input;
//     let percentage = (sum / 500)*100 ;
//     if(percentage >= 90){
//         console.log("Grade A");
//     }else if (percentage >= 80) {
//         console.log("Grade B");
//     } else if(percentage >= 70){
//         console.log("Grade C");
//     }else if(percentage >= 60) {
//         console.log("Grade D");
//     } else if(percentage >= 40){
//         console.log("Grade E");
//     }else{
//         console.log("You are Fail);
// }

