// let n = 5;

// for(let i =1; i<=n;i++){
//     console.log("hello,",i);
// }

// console.log("bye!");

// console.log(process.argv);

/*to get some special values, through the user, to use*/
let arg = process.argv;
for(let i = 2; i<arg.length; i++){
    console.log("hello to ", arg[i])
}

//module.exports
const sumValue = require("./math");
console.log(sumValue);
