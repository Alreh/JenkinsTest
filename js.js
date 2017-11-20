calculationExample();
function calculationExample(){
	var x = 100;
	var y = 250;
	var z = x + y;
	checkSum(z);
}

function checkSum(z){
	if(z == 350){
		console.log("Check passed");
	}
	else{
		console.log("Check did not pass");
	}
}
