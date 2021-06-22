

(() => {

    document.getElementById("run").addEventListener("click", function(){

        var myIntroduction = {
            lastName : "Kalonji",
            firstName : "Jonathan",
            age : 30,
            city : "Antwerp",
            country : "Belgium"
        }
        
        

        console.log("Hey curious reader, my name is " + myIntroduction.firstName + " "+ myIntroduction.lastName + " "+"I'm " + myIntroduction.age + " years old"+ " and I live in " + myIntroduction.country + " in the beautiful city of " + myIntroduction.city);
    });
    
})();
