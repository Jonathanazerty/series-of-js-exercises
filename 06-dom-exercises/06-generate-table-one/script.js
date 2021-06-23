(function() {
    // TODO: inside id target
    const body = document.querySelector("#target");
    // TODO: create table
    const table = document.createElement("table");
    // TODO: create table body
    const tableBody = document.createElement("tbody");

    // TODO: make column and 10 rows
    for (let i=0; i<10; i++) {
        //TODO: create row
        const tr = document.createElement("tr");
        //TODO: create cell
        const td = document.createElement("td");
        //TODO: create text inside cell
        const text = document.createTextNode("row");

        // TODO: add everything to html
        // TODO: add text
        td.appendChild(text);

        // TODO: add cell
        tr.appendChild(td);

        // TODO: add row
        tableBody.appendChild(tr);

        // TODO: add table body
        table.appendChild(tableBody);

        // TODO: add table
        body.appendChild(table);

        
    }


})();
