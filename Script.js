let notes = [
    {nom: "Étudiant1: ", notes: 85, notes: 72, notes: 90, notes: 85},
    {nom: "Étudiant2: ", notes: 60, notes: 68, notes: 75, notes: 80},
    {nom: "Étudiant3: ", notes: 95, notes: 88, notes: 90, notes: 91},
    {nom: "Étudiant4: ", notes: 45, notes: 52, notes: 60, notes: 65},
];
function generateTableHead(table, data) {
    let thead = table.creatTHead();
    let row = thead.insertRow();
    for (let key of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
}
function generateTable(table, data){
    for (let element of data) {
        let row = table.insertRow();
        for (key in element){
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
}
let table = document.querySelector("table");
let data = Object.keys(notes[0]);
generateTableHead(table, data);
generateTable(table, notes);
alert('test');

