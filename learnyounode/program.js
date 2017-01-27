// var args = process.argv;
// var sum = 0;
// for (var i=2; i < args.length; i++) {
//   sum += Number(args[i]);
// }
// console.log(sum);

var fs = require('fs');
var buffer = fs.readFileSync(process.argv[2]);
console.log(buffer.toString().split('\n').length -1);
