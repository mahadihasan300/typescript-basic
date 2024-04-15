// tsc .\index.ts
//  tsc .\src\index.ts
// tsc --init
// 
/***
 * Change in testconfig.json
 * "rootDir": "./src",  
 * "outDir": "./dist",
 * "removeComments": true, 
 *  "noEmitOnError": true,       
 * "sourceMap": true,        
 */


let age: number = 10;

if(age < 20){
    age += 10
}

console.log(age);

// 
let sales: number = 123_456_789;
let cours: string = 'Mahadi';
let is_published: boolean = true;

// We can also do in ts , TS will understand based on given data
let sales2 = 123_456_789;
let cours2 = 'Mahadi';
let is_published2 = true;

// but if we do not give any value it will treate as 'any' in TS
let level;

// we can give any value in any type of variable
level = 1;
level = 'a';

// but this is not acceptable as typescript defins type so for best practice we should not use any type

// =========================================================================================================================================

// function render(docoment){
//     console.log(docoment)
// }

/**
 * This will give error
 * Parameter 'docoment' implicitly has an 'any' type.ts(7006)
 * we can fix this by giving any type
 */
function render2(docoment: any){
    console.log(docoment)
}


/**
 * But if there is lots of them we can change the checking in testconfig.json
 * "noImplicitAny": false,   
 * now the render funcion will not give any error 
 * But this is not recomended
 */

// ============================================================================================================================================

// Arrays in TS

// in JS we can declar a array like this
let numbers = [1,2,3];

// where each element can be in deferent type
let numbers2 = [1,2,'3'];

// so we use TS to set type
let numbers3: number[] = [1,2,3];

// we can also do in TS , it will check the value and will act as numbers3
let numbers4 = [1,2,3];

// but what if we give an empty arrya ? it will be any array that we should avoid
let numbers5 = [];

// Only in TS we can get this n.toString, toFixed, valueOf and so many featers
// As numbers3 is a number array will will get only numbers features , it it was a string then it will show string features 
numbers3.forEach(n => n.toString)

// loop in array in TS

let num: number[] = [7, 8, 9];
num.forEach(function (value) {
    console.log(value);
});

num.forEach(element => {
    console.log(element);
});
// ============================================================================================================================================

// Tuples in TS
let user: [number, string] = [1,'Mahadi'];

// geting assess to tuple element 
user[0].toString // all the property of number object will come
user[1].charAt(0) // all the property of string object will come

// will get all the property of array object 
user.forEach // and so on

// one of the drawback is this method, compiler will not give any error but we are pushing in 3rd value which is not  possible
user.push(1);

// ============================================================================================================================================

// ENUM
