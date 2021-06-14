
let today = new Date();
let time = today.getHours();

(function() {
    function setTime() {
        
        if (time <= 18) {
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