

(() => {

    document.getElementById("run").addEventListener("click", function(){

        const person = {
            lastname: "Delnatte",
            firstname: "Pierre-Antoine",
            nickname: "Leny",
            birthDate: "08-05-1985",
            city: "Liège",
            status: "married",
        };
        
        

        console.log(Object.keys(person));
        console.log(Object.values(person));
    });
    
})();