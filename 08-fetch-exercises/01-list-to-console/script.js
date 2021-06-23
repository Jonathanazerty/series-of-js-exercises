

(() => {
    
    document.getElementById("run").addEventListener("click", function(){

        async function heroesData()
        {
            let data = await fetch("http://127.0.0.1:5500/01-list-to-console/api.json");

            let heroes = await data.json();
            console.log(heroes);
        }

        heroesData();
    });

})();
