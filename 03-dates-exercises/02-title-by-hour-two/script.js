
let today = new Date();
let hours = today.getHours();


(function() {
    function setTime() {
        
        if (hours <= "17:30") {
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