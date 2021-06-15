

(function() {

    let operation = function(operation) {
        let operand1 = document.getElementById("op-one").value;
        let operand2 = document.getElementById("op-two").value;
        let result;

        switch (operation) {
            case "addition":
                result = parseInt(operand1) + parseInt(operand2);
                break;
            case "substraction":
                result = parseInt(operand1) - parseInt(operand2);
                break;
            case "multiplication":
                result = parseInt(operand1) * parseInt(operand2);
                break;
            case "division":
                result = parseInt(operand1) / parseInt(operand2);
                break;
        }

        document.write(result);
    };

    Array.from(document.querySelectorAll("button.operator")).forEach(function($btn) {
        $btn.addEventListener("click", function() {
            operation($btn.id);
        });
    });
})();
