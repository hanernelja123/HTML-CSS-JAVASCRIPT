
//Functions
function showMesssage(){
	alert("This message is inside the function");
}

showMesssage();

function sum(number1, number2){
	return number1 + number2;
}


console.log(sum(255,5));







function dsFunction() {
  var localVar = "Digital School";
  alert(localVar);
  
}

dsFunction();

// alert(localVar);


function toSeconds(minutes){
	return minutes * 60;
}

console.log(toSeconds(60));



function triangleArea(baseLength, height){
	return 0.5 * baseLength * height
}

console.log(triangleArea(5, 7));


//Objects
var car = {
	name:"Mercedes", 
	color:"red", 
	year:2020, 
	kilometers:0,
    startEngine: function() {
    
        alert("Start");
        }

};

car.startEngine();


alert(car.name);


alert(car['color']);

var shkolla = { 
    name:"Shkolla Digjitale",
    viti_ndertimit:"2002",
    nxenesit:"2000"

};

alert(shkolla.viti_ndertimit);