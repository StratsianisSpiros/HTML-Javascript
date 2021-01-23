//Trainers table data
let items = [{ No: 1, FirstName: "Peter", LastName: "Parker", Subject: "Java" },
    { No: 2, FirstName: "Tony", LastName: "Stark", Subject: "C#" },
    { No: 3, FirstName: "Steve", LastName: "Rogers", Subject: "HTML" },
    { No: 4, FirstName: "Bruce", LastName: "Banner", Subject: "JavaScript" },
    { No: 5, FirstName: "Scott", LastName: "Lang", Subject: "Java" },
    { No: 6, FirstName: "Henry", LastName: "Mccoy", Subject: "C#" },
    { No: 7, FirstName: "Carol", LastName: "Danvers", Subject: "HTML" },
    { No: 8, FirstName: "Matt", LastName: "Murdock", Subject: "JavaScript" },
    { No: 9, FirstName: "Otto", LastName: "Octavius", Subject: "CSS" },
    { No: 10, FirstName: "Stephen", LastName: "Strange", Subject: "CSS" },
    { No: 11, FirstName: "Chuck", LastName: "Norris", Subject: "Java" },
    { No: 12, FirstName: "Eleni", LastName: "Louka", Subject: "HTML" }
];

let subject = ["", "C#", "Java", "HTML", "SQL", "Javascript", "Ruby", "Python", "C++", "C--"];

//Generates trainers tables from the array given for a number of times
function generateTable(tablename, times) {
    let table = document.getElementById(tablename);
    for (let i = 0; i < times; i++) {
        let row = table.insertRow();
        let element = items[i];
        for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
}

//Create option for select from html table
function CreateOptionsFromTable(selectid, table) {
    var optable = document.getElementById(table);
    let select = document.getElementById(selectid);
    for (var i = 0; optable.rows[i]; i++) {
        let opt = document.createElement("option");
        opt.innerHTML = (i + 1) + ". " + optable.rows[i].cells[1].innerHTML + " " + optable.rows[i].cells[2].innerHTML;
        select.appendChild(opt);
    }
}

//Creates options for select from subject array
function CreateSelectSubjectOptions(selectid) {
    let select = document.getElementById(selectid);
    for (let i = 0; i < subject.length; i++) {
        let opt = document.createElement("option");
        opt.innerHTML = subject[i];
        select.appendChild(opt);
    }
}

generateTable("displayTable", 22);
generateTable("updateDisplay", 12);

CreateSelectSubjectOptions("inputSubject");
CreateSelectSubjectOptions("inputSubjectUp");
CreateOptionsFromTable("selectTrainer", "updateDisplay");