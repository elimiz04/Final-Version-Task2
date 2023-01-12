//clears the file error status
function clearErrors(){
//     document.getElementById('error-content').innerHTML ="";

// document.getElementById('error').classList.remove('d-block');

// document.getElementById('error').classList.add('d-none');
}

//checks whether the value of each box is up to standard
function validateForm(){

var firstName = document.getElementById('firstName').value;
var lastName = document.getElementById('lastName').value;
var email = document.getElementById('email').value;
var message = document.getElementById('message').value;

var errors="";

var outcome =isTooShort(message);
if(outcome){
    alert("Message is to short")
    errors += "<li>Message too short, please provide more detail.</li>";
}
else{
    alert("Long enough"+outcome)
}

// ! means not in coding

}


function isTooShort(field){
if(field.length<20){
    return true;
}
else{
    return false;
}
}
