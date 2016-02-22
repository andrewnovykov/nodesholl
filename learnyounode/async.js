var fs = require('fs');

var buf = fs.readFile(process.argv[2], function(err, data){
	var str = data.toString();
	var ar = str.split('\n');
	console.log(ar.length-1);		  
});

