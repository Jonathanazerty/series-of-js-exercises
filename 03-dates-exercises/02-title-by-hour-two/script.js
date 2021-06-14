
let today = new Date();
let hours = today.getHours();
let minutes = today.getMinutes();

/*
let time = today.getHours(17, 30)
*/


(function() {
    function setTime() {
        
        if (hours, minutes <= 17, 30) {
            document.getElementById('target').innerHTML = 'Hello !';
        } 
        
        else {
            document.getElementById('target').innerHTML = 'Good Evening !';
        }
    }

    document.getElementById('target').onclick = function () {
        setTime();
    };
})();