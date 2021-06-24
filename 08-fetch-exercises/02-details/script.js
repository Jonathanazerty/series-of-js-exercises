

(() => {

    // TODO: click 
    document.getElementById("run").addEventListener("click", function(){

        // TODO async method
        async function heroesAllData()
        {
            let data = await fetch("http://127.0.0.1:5500/01-list-to-console/api.json");

            let heroes = await data.json();
            console.log(heroes);
            console.log(Object.keys(heroes));
            console.log(Object.values(heroes));
            {

            // TODO: id from the form and input
            const heroesInput = document.querySelector("#hero-id").value - 1;
            
            // TODO: template
            const template = document.getElementById("tpl-hero").content;
            const copyTemplate = document.importNode(template, true);

            const hEROES = heroes.heroes[heroesInput];
            console.log(hEROES);

            copyTemplate.querySelector(".name").innerHTML = hEROES.name;
            copyTemplate.querySelector(".alter-ego").innerHTML = hEROES.alterEgo;
            copyTemplate.querySelector(".powers"). innerHTML = hEROES.abilities;

            document.querySelector("#target").appendChild(copyTemplate);
            
            }
        }

        heroesAllData();
    });

})();