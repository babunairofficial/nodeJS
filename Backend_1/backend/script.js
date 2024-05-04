// let n = 5;

// for(let i =1; i<=n;i++){
//     console.log("hello,",i);
// }

// console.log("bye!");

// console.log(process.argv);

/*to get some special values, through the user, to use*/
// let arg = process.argv;
// for(let i = 2; i<arg.length; i++){
//     console.log("hello to ", arg[i])
// }

// //module.exports
// const sumValue = require("./math");
// console.log(sumValue);

// const info = require("./Fruits"); /*folder name*/

// console.log(info);

import {sum, pi} from "./math.js";
//to display without error add "type": module in package.json
console.log(sum(1,2));
console.log(pi);

import {generate} from "random-words"; //there is no need for ./ for packages
console.log(generate());