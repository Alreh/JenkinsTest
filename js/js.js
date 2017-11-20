calculationExample();
function calculationExample(){
	var x = 100;
	var y = 250;
	var z = x + y;
	checkSum(z);
}

function checkSum(z){
	if(z == 350){
		console.log("1/1 OK: Checks passed");
		return;
	}
	else{
		console.log("0/1: Check did not pass");
		return;
	}
}
