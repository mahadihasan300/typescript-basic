// tsc .\index.ts
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
var age = 10;
if (age < 20) {
    age += 10;
}
console.log(age);
// 
var sales = 123456789;
var cours = 'Mahadi';
var is_published = true;
// We can also do in ts , TS will understand based on given data
var sales2 = 123456789;
var cours2 = 'Mahadi';
var is_published2 = true;
// but if we do not give any value it will treate as 'any' in TS
var level;
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
function render2(docoment) {
    console.log(docoment);
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
var numbers = [1, 2, 3];
// where each element can be in deferent type
var numbers2 = [1, 2, '3'];
// so we use TS to set type
var numbers3 = [1, 2, 3];
// we can also do in TS , it will check the value and will act as numbers3
var numbers4 = [1, 2, 3];
// but what if we give an empty arrya ? it will be any array that we should avoid
var numbers5 = [];
// Only in TS we can get this n.toString, toFixed, valueOf and so many featers
// As numbers3 is a number array will will get only numbers features , it it was a string then it will show string features 
numbers3.forEach(function (n) { return n.toString; });
// loop in array in TS
// for(number num of numbers3){
// }
// ============================================================================================================================================
// Tuples in TS
