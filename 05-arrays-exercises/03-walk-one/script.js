

(function() {

    var fruits = [
        "apple",
        "pear",
        "raspberry",
        "tomatos",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peache",
        "grap",
        "cherry",
    ];

    document.getElementById('run').onclick = () => {
        var arrayLength = fruits.length;
        for (var i = 0; i < arrayLength; i++) {
            console.log(fruits[i]);
        }
    }

})();
