var fs = require('fs');
var buf = fs.readFileSync(process.argv[2]);
var str = buf.toString();
var ar = str.split('\n');
console.log(ar.length-1);





