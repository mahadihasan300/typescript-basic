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


