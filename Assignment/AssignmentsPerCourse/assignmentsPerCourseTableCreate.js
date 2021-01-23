let courses = ["KS8", "CT11", "CB17"]; //Courses data

//Assignment table data
let items = [{ No: 1, title1: "Arrays", subject1: "Array methods and uses", title2: "Loops", subject2: "Do 100 loops to see if you get dizzy", title3: "Shooting Exercises", subject3: "Play FPS games to exercise your shooting", },
    { No: 2, title1: "Inheritance", subject1: "Try to inherit a house", title2: "Delegates Advanced", subject2: "Assign a delegate to do your homework", title3: "Exceptions", subject3: "Methods to handle exceptions" },
    { No: 3, title1: "Classes", subject1: "Create classes and use objects", title2: "Paint", subject2: "Paint your house", title3: "Lists", subject3: "Display data from list" },
    { No: 4, title1: "If statements", subject1: "Uses of if statements", title2: "Lambda expressions", subject2: "Create methods with lambda expressions", title3: "Calculator", subject3: "Create simple calculator" }
];

let assignments = [{ No: 1, title: "Arrays", subject: "Array methods and uses" },
    { No: 2, title: "Loops", subject: "Do 100 loops to see if you get dizzy" },
    { No: 3, title: "Shooting Exercises", subject: "Play FPS games to exercise your shooting" },
    { No: 4, title: "Inheritance", subject: "Try to inherit a house" },
    { No: 5, title: "Delegates Advanced", subject: "Assign a delegate to do your homework" },
    { No: 6, title: "Exceptions", subject: "Methods to handle exceptions" },
    { No: 7, title: "Classes", subject: "Create classes and use objects" },
    { No: 8, title: "Paint", subject: "Paint your house" },
    { No: 9, title: "Lists", subject: "Display data from list" },
    { No: 10, title: "Delegates Basic", subject: "Exercise to use delegates" },
    { No: 11, title: "Lambda expressions", subject: "Create methods with lambda expressions" },
    { No: 12, title: "Calculator", subject: "Create simple calculator" }
];

//Generates assignment per course table from the array given for a number of times
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

//Generates assignment per course table head from the array given for a number of times
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

//Create assignments options from table
function CreateAssignmentsFromTable(selectid, table) {
    let ind = document.getElementById("selectCourseUp").selectedIndex + 1;
    let optable = document.getElementById(table);
    let select = document.getElementById(selectid);
    for (var i = 0; optable.rows[i]; i++) {
        let opt = document.createElement("option");
        opt.innerHTML = (i + 1) + ". " + optable.rows[i].cells[2 * ind - 1].innerHTML + ": " + optable.rows[i].cells[2 * ind].innerHTML;
        select.appendChild(opt);
    }
}

//Create option for assignments based on the assignments array
function CreateAssignmentOptions(selectid) {
    let select = document.getElementById(selectid);
    for (let i = 0; i < assignments.length; i++) {
        let opt = document.createElement("option");
        opt.innerHTML = assignments[i]["No"] + ". " + assignments[i]["title"] + ": " + assignments[i]["subject"];
        select.appendChild(opt);
    }
}

//Changes assignments options when changing courses
function ChangeAssignments(selectid, table) {
    let ind = document.getElementById("selectCourseUp").selectedIndex + 1;
    let optable = document.getElementById(table);
    let select = document.getElementById(selectid);
    for (var i = 0; i < select.options.length; i++) {
        select.options[i].innerHTML = (i + 1) + ". " + optable.rows[i].cells[2 * ind - 1].innerHTML + ": " + optable.rows[i].cells[2 * ind].innerHTML;
    }
}

CreateAssignmentOptions("selectAssignmentAdd");
CreateOptionsFromTable("selectCourseAdd", "displayTableHeadAdd");
CreateOptionsFromTable("selectCourseUp", "displayTableHeadUpdate");
CreateAssignmentsFromTable("selectAssignmentUp", "updateDisplay");