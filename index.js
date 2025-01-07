// const fruits =["apple","mango","grapes"];
// const fruits2 =[];
// for(let fruit of fruits){
//     fruits2.push(fruit.toUpperCase());
// }
// console.log(fruits2);
// for of loop in array
//for in loop
const fruits =["apple","mango","grapes"];
const fruits2 =[];
// for(let index in fruits){
//     fruits2.push(fruits[index].toLocaleUpperCase());
// }
// console.log(fruits2);
for(let i=0;i<fruits.length; i++){
   // console.log(fruits[i]);
   fruits2.push(fruits[i].toUpperCase());
}
console.log(fruits2);
//array destructering
const myArray=["value1","value2","value3","value4"];
// let myVar1 =myArray[0];
// let myVar2=myArray[1];
// console.log(`the value of myvar1 is ${myVar1}`);
// console.log(`the value of myvar2 is ${myVar2}`);
let[myVar1,myVar2,...myNewArray] =myArray;
// let myNewArray =myArray.slice(2);
//   myVar1="chinmoy";
//   myvar2 ="aarush";
  console.log("the value of myVar1", myVar1);
  console.log("the value of myVar2", myVar2);
  console.log(myNewArray);
  //object
//   const key ="email";
//   const person ={
//     name:"chinmoy",
//     age:30,
//     "person hobbies":["guiter","sleeping","listing music"]
//   };
//   console.log(person);
//   console.log(person["name"]);
//   console.log(person["person hobbies"]);
// //how to add key value pair to objects
// // person.gender ="male";
// // console.log(person);
//  person[key]="chinmoym66@gmail.com";
//  console.log(person);
 //
 //how to iterate object
 const key ="email";
 const person ={
   name:"chinmoy",
   age:30,
   "person hobbies":["guiter","sleeping","listing music"]
 };
//  for(let key in person){
//     console.log(key," : ", person[key]);
//  }
// console.log(typeof (Object.keys(person)));
// const val =Array.isArray((Object.keys(person)));
// console.log(val);
for(let key of Object.keys(person)){
    console.log(person[key]);
}
//computed properties
const key1 ="objkey1";
const key2 ="objkey2";
const value1 ="myvalue1";
const value2 ="myvalue2";
// const obj ={
//     objkey1 : "myvalue1",
//     objkey2 : "myvalue2"
// }
// const obj ={
//     [key1]:value1,
//     [key2]:value2,
// }
// console.log(obj);
// const obj ={};
//  obj[key1] =value1;
//  obj[key2] =value2;
//  console.log(obj);
 //spread operator
//  const array1 =[1,2,3];
//  const array2 =[5,6,7];
//  const newArray =[..."3455666777"];
//  console.log(newArray);
const obj1 ={
    key1:"value1",
    key2:"value2",
};
const obj2 ={
    key3 :"value3",
    key4 :"value4",
    key1 :"chinmoy",
};
// const new$obj={
//     ...obj1,...obj2, key56:"ghopp"
// };
const new$obj ={..."abcdefghijklmnopqrstuv"};
console.log(new$obj);
//object destructing
const band ={
    bandName : "dongtoll",
    famousSong: "dill chata hai",
    year:2023,
    anotherFamousSong:"maa tujhe salam",
};
let{bandName, famousSong, ...army} =band;
console.log(bandName);
console.log(army);
// objects inside array
const users = [
    {userId:1, firstName:'chinmoy', gender:'male'},
    {userId:2, firstName:'aarush', gender:'female'},
    {userId:3, firstName:'guruji', gender:'transgender'},
]
const[user1,user2,user3] = users;
console.log(user1);
// for(let user of users){
//     console.log(user.gender);
// }
//nested destructing
// const [{firstname: user1firstnme} {gender:user3gender}];
// console.log(user1firstnme);// doubt
