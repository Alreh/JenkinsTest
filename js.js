calculationExample();
function calculationExample(){
	var x = 100;
	var y = 220;
	var z = x + y;
	checkSum(z);
}

function checkSum(z){
	if(z == 350){
		console.log("1/1 OK: Checks passed");
		return 0;
	}
	else{
		console.log("0/1: Check did not pass");
		return 1;
	}
}
