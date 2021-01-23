let courses = ["CB8", "CB12", "CB10", "CB7"]; //Courses data

//Students table data
let items = [{ No: 1, FirstName1: "Kostas", LastName1: "Papadopoulos", FirstName2: "Katerina", LastName2: "Karagiani", FirstName3: "Niki", LastName3: "Oikonomou", FirstName4: "Vassilis", LastName4: "Papageorgiou" },
    { No: 2, FirstName1: "Nikolaos", LastName1: "Makris", FirstName2: "Giannis", LastName2: "Chatzis", FirstName3: "Katerina", LastName3: "Lagou", FirstName4: "Kostas", LastName4: "Samaras" },
    { No: 3, FirstName1: "Vaggelis", LastName1: "Marinakis", FirstName2: "Maria", LastName2: "Patera", FirstName3: "Eirni", LastName3: "Petridi", FirstName4: "Nikolaos", LastName4: "Vasilopoulos" },
    { No: 4, FirstName1: "Vasilis", LastName1: "Pappas", FirstName2: "George", LastName2: "Kasidiaris", FirstName3: "Giannis", LastName3: "Anagnostopoulos", FirstName4: "Kostas", LastName4: "Efthimiadis" },
    { No: 5, FirstName1: "Maria", LastName1: "Vlachou", FirstName2: "Spiros", LastName2: "Dimopoulos", FirstName3: "George", LastName3: "Antoniou", FirstName4: "Nikolaos", LastName4: "Makris" },
    { No: 6, FirstName1: "Giannis", LastName1: "Agravanis", FirstName2: "Nikolaos", LastName2: "Arniakos", FirstName3: "Maria", LastName3: "Douka", FirstName4: "Kostas", LastName4: "Vergas" },
    { No: 7, FirstName1: "Nikolaos", LastName1: "Boudouris", FirstName2: "Kostas", LastName2: "Lianos", FirstName3: "Giannis", LastName3: "Koumparakis", FirstName4: "George", LastName4: "Kallimanis" }
];

let students = [{ No: 1, FirstName: "Kostas", LastName: "Papadopoulos" },
    { No: 2, FirstName: "Katerina", LastName: "Karagiani" },
    { No: 3, FirstName: "Niki", LastName: "Oikonomou" },
    { No: 4, FirstName: "Vassilis", LastName: "Papageorgiou" },
    { No: 5, FirstName: "Nikolaos", LastName: "Makris" },
    { No: 6, FirstName: "Giannis", LastName: "Chatzis" },
    { No: 7, FirstName: "Katerina", LastName: "Lagou" },
    { No: 8, FirstName: "Kostas", LastName: "Samaras" },
    { No: 9, FirstName: "Vaggelis", LastName: "Marinakis" },
    { No: 10, FirstName: "Maria", LastName: "Patera" },
    { No: 11, FirstName: "Eirni", LastName: "Petridi" },
    { No: 12, FirstName: "Nikolaos", LastName: "Vasilopoulos" },
    { No: 13, FirstName: "Vasilis", LastName: "Pappas" },
    { No: 14, FirstName: "George", LastName: "Kasidiaris" },
    { No: 15, FirstName: "Giannis", LastName: "Anagnostopoulos" },
    { No: 16, FirstName: "Kostas", LastName: "Efthimiadis" },
    { No: 17, FirstName: "Maria", LastName: "Vlachou" },
    { No: 18, FirstName: "Spiros", LastName: "Dimopoulos" },
    { No: 19, FirstName: "George", LastName: "Antoniou" },
    { No: 20, FirstName: "Nikolaos", LastName: "Makris" },
    { No: 21, FirstName: "Giannis", LastName: "Agravanis" },
    { No: 22, FirstName: "Nikolaos", LastName: "Arniakos" },
    { No: 23, FirstName: "Maria", LastName: "Douka" },
    { No: 24, FirstName: "Kostas", LastName: "Vergas" },
    { No: 25, FirstName: "Nikolaos", LastName: "Boudouris" },
    { No: 26, FirstName: "Kostas", LastName: "Lianos" },
    { No: 27, FirstName: "Giannis", LastName: "Koumparakis" },
    { No: 28, FirstName: "George", LastName: "Kallimanis" }
];

//Generates student per course table from the array given for a number of times
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

//Generates student per course table head from the array given for a number of times
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

//Create student options from table
function CreatestudentsFromTable(selectid, table) {
    let ind = document.getElementById("selectCourseUp").selectedIndex + 1;
    let optable = document.getElementById(table);
    let select = document.getElementById(selectid);
    for (var i = 0; optable.rows[i]; i++) {
        let opt = document.createElement("option");
        opt.innerHTML = (i + 1) + ". " + optable.rows[i].cells[2 * ind - 1].innerHTML + " " + optable.rows[i].cells[2 * ind].innerHTML;
        select.appendChild(opt);
    }
}

//Create option for students based on the students array
function CreateStudentOptions(selectid) {
    let select = document.getElementById(selectid);
    for (let i = 0; i < students.length; i++) {
        let opt = document.createElement("option");
        opt.innerHTML = students[i]["No"] + ". " + students[i]["FirstName"] + " " + students[i]["LastName"];
        select.appendChild(opt);
    }
}

//Changes students options when changing courses
function ChangeStudents(selectid, table) {
    let ind = document.getElementById("selectCourseUp").selectedIndex + 1;
    let optable = document.getElementById(table);
    let select = document.getElementById(selectid);
    for (var i = 0; i < select.options.length; i++) {
        select.options[i].innerHTML = (i + 1) + ". " + optable.rows[i].cells[2 * ind - 1].innerHTML + " " + optable.rows[i].cells[2 * ind].innerHTML;
    }
}

CreateStudentOptions("selectStudentAdd");
CreateOptionsFromTable("selectCourseAdd", "displayTableHeadAdd");
CreateOptionsFromTable("selectCourseUp", "displayTableHeadUpdate");
CreatestudentsFromTable("selectStudentUp", "updateDisplay");