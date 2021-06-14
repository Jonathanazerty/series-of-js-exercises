
(function questions() {


let age = prompt ("Please enter your age here");
let gender = prompt ("Please enter your gender here");
let town = prompt ("Please enter your town here");

let confirmation = confirm ("Are you " + age + " years old?\nAre you a " + gender + " ?\nDo you live in " + town + " ?");



if (confirmation === true) {
        alert("Thank you for your time!")
}

else {
    questions ("please try again");
}

})();