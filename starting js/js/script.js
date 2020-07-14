var message ="in global";
console.log(message);
 
var a= function () {
	var message = "inside a"
	console.log(message);

	b();
}

function b () {
	    console.log(message);
}

a();



