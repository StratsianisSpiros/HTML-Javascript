let courses = ["CB8", "FD12", "CB10", "TR7"]; //Courses data

//Trainers table data
let items = [{ No: 1, FirstName1: "Peter", LastName1: "Parker", FirstName2: "Steve", LastName2: "Rogers", FirstName3: "Scott", LastName3: "Lang", FirstName4: "Stephen", LastName4: "Strange" },
    { No: 2, FirstName1: "Tony", LastName1: "Stark", FirstName2: "Matt", LastName2: "Murdock", FirstName3: "Otto", LastName3: "Octavius", FirstName4: "", LastName4: "" },
    { No: 3, FirstName1: "Bruce", LastName1: "Banner", FirstName2: "", LastName2: "", FirstName3: "Carol", LastName3: "Danvers", FirstName4: "", LastName4: "" }
];

let trainers = [{ No: 1, FirstName: "Peter", LastName: "Parker" },
    { No: 2, FirstName: "Steve", LastName: "Rogers" },
    { No: 3, FirstName: "Scott", LastName: "Lang", },
    { No: 4, FirstName: "Stephen", LastName: "Strange" },
    { No: 5, FirstName: "Tony", LastName: "Stark" },
    { No: 6, FirstName: "Matt", LastName: "Murdock" },
    { No: 7, FirstName: "Otto", LastName: "Octavius" },
    { No: 8, FirstName: "Bruce", LastName: "Banner" },
    { No: 9, FirstName: "Carol", LastName: "Danvers" },
    { No: 10, FirstName: "Henry", LastName: "Mccoy" },
    { No: 11, FirstName: "Chuck", LastName: "Norris" },
    { No: 12, FirstName: "Eleni", LastName: "Louka" }
];

//Generates trainers per course table from the array given for a number of times
function generateTable(tablename) {
    let table = document.getElementById(tablename);
    for (let i = 0; i < items.length; i++) {
        let row = table.insertRow();
        let element = items[i];
        for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
}

//Generates trainers per course table head from the array given for a number of times
function generateTableHead(tablename) {
    let table = document.getElementById(tablename);
    let row = table.insertRow();
    row.insertCell(0).innerHTML = "Courses";
    for (let i = 0; i < courses.length; i++) {
        let cell = row.insertCell(i + 1);
        cell.colSpan = 2;
        cell.innerHTML = courses[i];
    }
}

generateTableHead("displayTableHead");
generateTableHead("displayTableHeadAdd");
generateTableHead("displayTableHeadUpdate");
generateTable("displayTable");
generateTable("updateDisplay");

//Create option for select from html table
function CreateOptionsFromTable(selectid, table) {
    var optable = document.getElementById(table);
    let select = document.getElementById(selectid);
    for (var i = 1; i < optable.rows[1].cells.length; i++) {
        let opt = document.createElement("option");
        opt.innerHTML = (i) + ". " + optable.rows[1].cells[i].innerHTML;
        select.appendChild(opt);
    }
}

//Create trainer options from table
function CreateTrainersFromTable(selectid, table) {
    let ind = document.getElementById("selectCourseUp").selectedIndex + 1;
    let optable = document.getElementById(table);
    let select = document.getElementById(selectid);
    for (var i = 0; optable.rows[i]; i++) {
        let opt = document.createElement("option");
        opt.innerHTML = (i + 1) + ". " + optable.rows[i].cells[2 * ind - 1].innerHTML + " " + optable.rows[i].cells[2 * ind].innerHTML;
        select.appendChild(opt);
    }
}

//Create option for trainer based on the trainers array
function CreateTrainerOptions(selectid) {
    let select = document.getElementById(selectid);
    for (let i = 0; i < trainers.length; i++) {
        let opt = document.createElement("option");
        opt.innerHTML = trainers[i]["No"] + ". " + trainers[i]["FirstName"] + " " + trainers[i]["LastName"];
        select.appendChild(opt);
    }
}

//Changes trainers options when changing courses
function ChangeTrainers(selectid, table) {
    let ind = document.getElementById("selectCourseUp").selectedIndex + 1;
    let optable = document.getElementById(table);
    let select = document.getElementById(selectid);
    for (var i = 0; i < select.options.length; i++) {
        select.options[i].innerHTML = (i + 1) + ". " + optable.rows[i].cells[2 * ind - 1].innerHTML + " " + optable.rows[i].cells[2 * ind].innerHTML;
    }
}

CreateTrainerOptions("selectTrainerAdd");
CreateOptionsFromTable("selectCourseAdd", "displayTableHeadAdd");
CreateOptionsFromTable("selectCourseUp", "displayTableHeadUpdate");
CreateTrainersFromTable("selectTrainerUp", "updateDisplay");