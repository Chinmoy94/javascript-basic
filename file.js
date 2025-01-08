console.log("hello world");
//console.log can print something on console
//variables can store some information
//variables can be declared in let,var
//variable name
var firstName ="chinmoy";//camelcase
console.log(firstName);
firstName = "don";
console.log(firstName);
//"use stict";
var  chinmoy3 =60;
console.log(chinmoy3**2);
//first_name
//_firstname
//first$name
let first_name = "aarush";//snake case writing
console.log(first_name);
const pi =3.23;
  console.log(pi*6);
  // String indexing
  let first$name ="sudipahdggsjkltyy";
// console.log(first$name[0]);
 console.log(first$name.length);
 //last index : length -1
console.log(first$name[first$name.length-1]);
//trim
//slice
//toUppercase
//tolowercase
let lastName ="dental"
/*console.log(lastName.length);
lastName = lastName.trim();
console.log(lastName.length);
console.log(lastName);*/
let age =78;
let name ="sourav";
// convert number to string
age = age + "";
console.log(typeof (age));
let myStr = +"45";
console.log(typeof myStr);
let myMovie ="khadan";
let my_slice =myMovie.slice(0,4);
console.log(my_slice);
//string concatenation
let string1 ="17";
let string2 ="10";
let fullName = +string1 + +string2;
console.log(typeof fullName);
//template string
let ahe =45;
let fname ="hrei";
let aboutMe =`my name is ${fname}  and my age is ${ahe}`;
console.log(aboutMe);
//undefined
let last_name;
last_name ="hoyett";
console.log(typeof last_name,last_name)
//null
let myNull =null;
myNull ="doyy"
console.log( myNull);
let myNum =BigInt(12);
let same_my_number =12n;
console.log(myNum + same_my_number);
//booleans&comparison operator
//booleans=true,false;
let num1 =45;
let num2 ="45";
//console.log(num1<=num2);
// ==vs==
//console.log(num1===num2);
console.log(num1!==num2);
//truthy and falsy values
//" "
//0
//undefined
//null
let age1 =17;
if(age1>=18){
  console.log("you can derive");
}else{
  console.log("you cant drive");
}
let num =13;
if(num%2===0){
  console.log("even");
}else{
  console.log("odd");
}
//falsey values
let myHome = "hasry";
if(myHome){
  console.log(myHome)
}else{
  console.log("no myHome");
}
  //ternary operator
 /* let age3 = 4;
  let drink;
  if(age3>=5){
    drink ="coffee";
  }else{
    drink ="milk";

  }
   console.log(drink) ;*/
  //conditional operator
let ag3 =18;
let drink =ag3>=5 ? "coffee" : "milk";
console.log(drink);
// and or operator
// let $fname ="Singham";
// let $age =9;
// if($fname[0]==="s" && $age>=18){
//   console.log("your name starts with s and above 18");
// }else{
//   console.log("hkksi ghh")
// }
// let $fname ="Singham";
// let $age =8;
// if($fname[0]==="s" || $age>=18){
//   console.log("your name starts with s and above 18");
// }else{
//   console.log("hkksi ghh")
// }
// //nested if else
// let winnigNum = 30;
// let inputNum = + prompt("enter a number");
// if(inputNum === winningNum){
//   console.log("you win ");
// }
// else{
//   if(inputNum>winningNum){
//     console.log("too high");
//   }else{
//     console.log("too low");
//   }
// }
//if
//else if
//else if
//else

// let tempInDegree =1;
// if(tempInDegree<40){
//   console.log("its too hot");
// }else if(tempInDegree<20){
//   console.log("its normal");
// }else if(tempInDegree<30){
//   console.log("its medium");
// }else if(tempInDegree<10){
//   console.log("its cold");
// }else{
//   console.log("its melt");
// }
// let day =5;
// if(day===0){
//   console.log("sunday");
// }else if(day===1){
//   console.log("monday");
// }else if(day===2){
//   console.log("tuesday");
// }else if(day===3){
//   console.log("wednesday");
// }else if(day===4){
//   console.log("thursday");
// }else if(day===5){
//   console.log("friday");
// }else if(day===6){
//   console.log("saturday");
// }else{
//   console.log("inavalid");
// }
//swith statement
let day =2;
switch(day){
  case 0:
    console.log("sunday");
    break;
    case 1:
       console.log("monday");
       break;
       case 2:
        console.log("tuesdsay");
        break;
}
//while loop
//dry dont repaet yourself
let i = 10;
while(i<=20){
  i++;
  console.log(i);
 // console.log("hello");
}
console.log(`current value of i is ${i}`);
//let num6 = 100;
//let total1 =0;
//let k = 0;
//while(k<=num6){
  //total = total +k;
  //k++;
//}
//console.log(total);
//for loop
//print 0 to 9
for(let i =0; i<=9; i++){
  console.log(i);
}
//console.log(i);
// let total = 0;
// let num5 =100;
// for(let i=0; i<=num5; i++){
//   total=total+i;
// }
// console.log(total);
//break loop
// for(let i=1; i<=10; i++){
//  if(i===4){
//   break;
//  }
//  console.log(i);
// }
console.log("ghghg");
//continue
for(let i=1; i<=10; i++){
  if(i===4){
   continue;
  }
  console.log(i);
 }
 let m =30;
  do{
    console.log(m);
    m++
  }while(
    m<=20
  );
 console.log(m);
// intro to array
//ordered collection of items
let fruits = ["apple","mango","banana"];
fruits[1] ="kiwi";
//let numbers = [1,2.5,7,7];
//console.log(numbers[2]);
console.log(fruits);
//referece type
//array=object
console.log(Array.isArray(fruits));
//{}=object literels
// array push pop
//fruits.push("orange");
//console.log(fruits);
//let poppedFruit=fruits.pop();
//console.log(fruits);
//console.log("proppedFruite is",poppedFruit);
//fruits.unshift("lichi","pppya");
//console.log(fruits);
//primitive vs reference type
//let array1 =["item1","item2"];
//let array2 =array1;
// console.log("array1",array1);
// console.log("array2",array2);
// array1.push("item3");
// console.log(`after pushing new array is ${array2}`);
//primitive types stores in stack
//we can deposit data in stack
//primitve data does not take too much data
//refence type data
//stack heap
//memory one array same address
//how to clone array
let array1 = ["item5","item6"];
//let array2 = ["item5","item6"];
//let array2 = array1.slice(0);
//let array2 =[].concat(array1);
//spread opearator
//let array2=[...array1].concat(["item9","item6"]);
let oneMoreArray =["item5","item7"];
let array2 =[...array1,...oneMoreArray];
console.log(array1===array2);
array1.push("item7");
console.log(array1);
console.log(array2);
//for loop in array
let hgtid=["apple","mango","graaps"];
//for(let d=0, d<=9; d++){
 // console.log(d);
//}
//length property is important
//console.log(hgtid.length);
//console.log(hgtid[hgtid.length-2]);
// for(let i=0; i< hgtid.length;i++ ){
//   console.log(hgtid[i].toUpperCase());
// }
let hgfhht =[];
for(let i=0; i<hgtid.length; i++){
  hgfhht.push(hgtid[i].toUpperCase());
}
console.log(hgfhht);
//use const in array
const fruts =["apple","mango"];//heap memory
fruts.push("licchi");
console.log(fruts);
// while loop array
// const movie = ["gdgd","jkgk","fjck"];
// const movie4 =[];
// let k=0;
// while( k<movie.length){
//   k++;
//   movie4.push(movie[k].toUpperCase());
// }
// console.log(movie4);
//for of loop in array
//loop use in itratre
