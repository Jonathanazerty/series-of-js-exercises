


var age = prompt ("Please enter your age here");
var gender = prompt ("Please enter your gender here");
var town = prompt ("Please enter your town here");

var correctInfo = confirm ("Are you " + age + " years old?");
var correctInfo = confirm ("Are you a " + gender + " ?");
var correctInfo = confirm ("Do you live in " + town + " ?");


if (correctInfo == true) {
}

else {
    correctInfo = confirm ("Is the info correct?");
}