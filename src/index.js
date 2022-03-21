// var val1 = 'var A';
// console.log(val1);

// // var A overwite
// val1 = 'var B';
// console.log(val1);

// // var A recall
// var val1 = 'var recall';
// console.log(val1);

// let var2 = "let var";
// console.log(var2);

// var2 = "let overwrite";
// console.log(var2);

// let var2 = "let recall";

// const val3 = "const var";
// console.log(val3);

// //

// const val3 = "const";

// const val4 = {
//   name: "jake",
//   age: 25,
// };

// val4.name = "jak";
// val4.address = "Hiroshima";
// console.log(val4);

// const val5 = ['dog','cat'];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * template
 */
// const name = "jake";
// const age = 29;

// // my name is jake. I'm 29.

// const message1 = 'my name is' + name + " I'm " + age;
// console.log(message1);

// // template
// const message2 = `My name is${name}.I'm${age}`;
// console.log(message2);

// function func1(str) {
//   return str;
// }
// const func1 = function(str){
//   return str
// }

// console.log(func1("func1"));

// const func2 = (str) => {
//   return str;
// };
// console.log(func2('func2'));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(func3(10,20));

// const myProfile = {
//   name: 'jake',
//   age: 29,
// };

// const message1 = `My name ${myProfile.name}. Age is ${myProfile.age}.`;
// console.log(message1);

// const {name, age} = myProfile;
// const message2 = `My name ${name}. Age is ${age}.`;
// console.log(message2);

// const myProfile = ['jake', 20];

// const message3 = `I'm ${myProfile[0]}. Age is ${myProfile[1]}`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `I'm ${name}. Age is ${age}.`;
// console.log(message4);

// const sayHello = (name = "guest") => console.log(`Helloe ${name}-san!`);
// sayHello();

// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// const arr2 = [1,2,3,4,5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;
// console.log(arr8);
// console.log(arr4);

const nameArr = ["tanaka", "yamada", "jake"];
// for (let index = 0; index < nameArr.length; index++){
//   console.log(`Number is ${index + 1} whith has Name of ${nameArr[index]}`);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// })
// console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index} is ${name}.`));

// const numArr = [1,2,3,4,5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1 ;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "jake") {
//     return name
//   } else {
//     return `${name}=san`
//   }
// })
// console.log(newNameArr);

// const val1 = 1 > 0 ? 'true' : 'false';
// console.log(val1);

// const num = "5724";
// // console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : 'input number';
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? 'over 100' : 'OK';
// }

// console.log(checkSum(20,60));

/**
 *
 */

//  const flag1 = true;
//  const flag2 = true;

//  if (flag1 || flag2) {
//    console.log("1 or 2 is true");
//  };
//  if (flag1 && flag2) {
//   console.log("1 and 2 is true");
// };

// const num = 100;
// const fee = num || 'no set money';
// console.log(fee);

// const num2 = null;
// const fee2 = num2 && "input enything";
// console.log(fee2);
