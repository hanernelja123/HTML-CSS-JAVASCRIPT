var x=5;

if (x > 2){
    console.log("x eshte me i madh se vlera 2")
}
else {
    console.log("x eshte me i vogel se 2");
}

var input = document.getElementById('input_id');
var button = document.getElementById('btn_id');
var text = document.getElementById('text_id');

button.onclick = function(){
    text.innerHTML = input.value;

}


var input1_id = document.querySelector('#input1_id');
var input2_id = document.querySelector('#input2_id');
var btn2 = document.querySelector('#btn2_id');
var answer = document.querySelector('#answer');

btn2.addEventListener("click", function(){
    text.innerHTML=parseInt(input)+(input2)
}


)