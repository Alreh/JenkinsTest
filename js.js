calculationExample();
function calculationExample(){
	var x = 100;
	var y = 250;
	var z = x + y;
	checkSum(z);
}

function checkSum(z){
	if(z == 350){
		document.getElementById("second").innerHTML = "calculationExample result was valid, check passed!";
		console.log("Check passed");
	}
	else{
		document.getElementById("second").innerHTML = "calculationExample did not match the expected number, check didnt pass!";
		console.log("Check did not pass");
	}
}
