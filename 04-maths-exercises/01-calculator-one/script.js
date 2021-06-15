

(function() {

    document.getElementById("addition").addEventListener("click", function() {
    let operand1 = document.getElementById("op-one").value;
    let operand2 = document.getElementById("op-two").value;
    let addition = parseInt(operand1) + parseInt(operand2);
    document.write(addition);
    });

    document.getElementById("substraction").addEventListener("click", function() {
        let operand1 = document.getElementById("op-one").value;
        let operand2 = document.getElementById("op-two").value;
        let substraction = parseInt(operand1) - parseInt(operand2);
        document.write(substraction);
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        let operand1 = document.getElementById("op-one").value;
        let operand2 = document.getElementById("op-two").value;
        let multiplication = parseInt(operand1) * parseInt(operand2);
        document.write(multiplication);
    });

    document.getElementById("division").addEventListener("click", function() {
        let operand1 = document.getElementById("op-one").value;
        let operand2 = document.getElementById("op-two").value;
        let division = parseInt(operand1) / parseInt(operand2);
        document.write(division);
    });
})();
