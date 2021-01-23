let courses = ["KR8", "CB12", "FB7"]; //Courses data

//Students table data
let items = [{ No: 1, FirstName1: "Kostas", LastName1: "Papadopoulos", FirstName2: "Katerina", LastName2: "Karagiani", FirstName3: "Niki", LastName3: "Oikonomou" },
    { No: 2, FirstName1: "Nikolaos", LastName1: "Makris", FirstName2: "Giannis", LastName2: "Chatzis", FirstName3: "Katerina", LastName3: "Lagou" },
    { No: 3, FirstName1: "Vaggelis", LastName1: "Marinakis", FirstName2: "Maria", LastName2: "Patera", FirstName3: "Eirni", LastName3: "Petridi" },
    { No: 4, FirstName1: "Vasilis", LastName1: "Pappas", FirstName2: "George", LastName2: "Kasidiaris", FirstName3: "Giannis", LastName3: "Anagnostopoulos" },
    { No: 5, FirstName1: "Maria", LastName1: "Vlachou", FirstName2: "Spiros", LastName2: "Dimopoulos", FirstName3: "George", LastName3: "Antoniou" }
];

let assignmentItems = [{ No1: "-", Assignment1: "Loops", OralMark1: "Oral  : 17", TotalMark1: "Total : 78", Assignment2: "Delegates Advanced", OralMark2: "Oral : 10", TotalMark2: "Total : 56", Assignment3: "Shooting Exercises", OralMark3: "Oral : 18", TotalMark3: "Total 66" },
    { No1: "-", Assignment1: "Delegates Advanced", OralMark1: "Oral : 10", TotalMark1: "Total : 46", Assignment2: "Arrays", OralMark2: "Oral : 12", TotalMark2: "Total : 34", Assignment3: "Classes", OralMark3: "Oral : 20", TotalMark3: "Total : 90" },
    { No1: "-", Assignment1: "Exceptions", OralMark1: "Oral : 15", TotalMark1: "Total : 87", Assignment2: "Inheritance", OralMark2: "Oral : 19", TotalMark2: "Total : 66", Assignment3: "Shooting Exercises", OralMark3: "Oral : 13", TotalMark3: "Total : 67" },
    { No1: "-", Assignment1: "Classes", OralMark1: "Oral : 13", TotalMark1: "Total : 67", Assignment2: "Arrays", OralMark2: "Oral : 11", TotalMark2: "Total : 78", Assignment3: "Paint", OralMark3: "Oral : 12", TotalMark3: "Total : 54" },
    { No1: "-", Assignment1: "Loops", OralMark1: "Oral : 09", TotalMark1: "Total : 45", Assignment2: "Delegates Basic", OralMark2: "Oral : 05", TotalMark2: "Total : 34", Assignment3: "Delegates Basic", OralMark3: "Oral : 15", TotalMark3: "Total : 88" }
];

let assignments = [{ No: "1", title: "Arrays" },
    { No: "2", title: "Loops" },
    { No: "3", title: "Shooting Exercises" },
    { No: "4", title: "Delegates Advanced" },
    { No: "5", title: "Inheritance" },
    { No: "6", title: "Exceptions" },
    { No: "7", title: "Classes" },
    { No: "8", title: "Paint" },
    { No: "9", title: "Lists" },
    { No: "10", title: "Delegates Basic" }
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
        let row2 = table.insertRow();
        let element = items[i];
        let element2 = assignmentItems[i];
        for (key in element) {
            if (key === "LastName1" || key === "LastName2" || key === "LastName3") {
                let cell = row.insertCell();
                cell.colSpan = 2;
                let text = document.createTextNode(element[key]);
                cell.appendChild(text);
            } else {
                let cell = row.insertCell();
                let text = document.createTextNode(element[key]);
                cell.appendChild(text);
            }
        }
        for (key2 in element2) {
            let cell2 = row2.insertCell();
            let text2 = document.createTextNode(element2[key2]);
            cell2.appendChild(text2);
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
        cell.colSpan = 3;
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

//Create students / assignments options from table
function CreateStudentsAssignmentsFromTable(selectid, selectid2, table) {
    let ind = document.getElementById("selectCourseUp").selectedIndex + 1;
    let optable = document.getElementById(table);
    let select = document.getElementById(selectid);
    let select2 = document.getElementById(selectid2);
    for (var i = 0; optable.rows[i]; i += 2) {
        let opt = document.createElement("option");
        opt.innerHTML = (i / 2 + 1) + ". " + optable.rows[i].cells[2 * ind - 1].innerHTML + " " + optable.rows[i].cells[2 * ind].innerHTML;
        select.appendChild(opt);
        let opt2 = document.createElement("option");
        opt2.innerHTML = (i / 2 + 1) + ". " + optable.rows[i + 1].cells[3 * ind - 2].innerHTML;
        select2.appendChild(opt2);
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

//Create option for assignments based on the students array
function CreateAssignmentOptions(selectid) {
    let select = document.getElementById(selectid);
    for (let i = 0; i < assignments.length; i++) {
        let opt = document.createElement("option");
        opt.innerHTML = assignments[i]["No"] + ". " + assignments[i]["title"];
        select.appendChild(opt);
    }
}

//Changes students / assignments options when changing courses
function ChangeStudentsAssignments(selectid, selectid2, table) {
    let ind = document.getElementById("selectCourseUp").selectedIndex + 1;
    let optable = document.getElementById(table);
    let select = document.getElementById(selectid);
    let select2 = document.getElementById(selectid2);
    for (var i = 0; i < select.length; i++) {
        select.options[i].innerHTML = (i + 1) + ". " + optable.rows[i * 2].cells[2 * ind - 1].innerHTML + " " + optable.rows[i * 2].cells[2 * ind].innerHTML;
        select2.options[i].innerHTML = (i + 1) + ". " + optable.rows[i * 2 + 1].cells[3 * ind - 2].innerHTML;
    }
}

CreateStudentOptions("selectStudentAdd");
CreateAssignmentOptions("selectAssignmentAdd");
CreateOptionsFromTable("selectCourseAdd", "displayTableHeadAdd");
CreateOptionsFromTable("selectCourseUp", "displayTableHeadUpdate");
CreateStudentsAssignmentsFromTable("selectStudentUp", "selectAssignmentUp", "updateDisplay");