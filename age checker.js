

var age = prompt("how old are you?");

if(age < 0){
	alert("error!")
	console.log("error!");
}

else if (age == 21) {
	alert("happy 21 st birthday!")
	console.log("happy 21 st birthday!");
}

else if (age % 2 == 1){
	alert("your age is odd!")
	console.log("your age is odd!");

}

else{

	alert("super!");

}