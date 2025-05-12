function validation() {


    var name = document.getElementById("name").value;
    var valid_name_regex = /^[A-ZA-z]+$/;


    var age = document.getElementById("age").value;
    var valid_age_regex = /^[0-9]+$/;


    var city = document.getElementById("city").value;


    if(!(name.match(valid_name_regex) 


}