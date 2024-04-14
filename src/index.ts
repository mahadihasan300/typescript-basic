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
