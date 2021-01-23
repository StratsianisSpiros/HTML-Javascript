//Assignment table data
let items = [{ No: "1", title: "Arrays", subject: "Array methods and uses", submissiondate: "2021-03-15" },
    { No: "2", title: "Loops", subject: "Do 100 loops to see if you get dizzy", submissiondate: "2021-02-21" },
    { No: "3", title: "Shooting Exercises", subject: "Play FPS games to exercise your shooting", submissiondate: "2021-04-15" },
    { No: "4", title: "Delegates Advanced", subject: "Assign a delegate to do your homework", submissiondate: "2021-03-18" },
    { No: "5", title: "Inheritance", subject: "Try to inherit a house", submissiondate: "2021-02-25" },
    { No: "6", title: "Exceptions", subject: "Methods to handle exceptions", submissiondate: "2021-02-01" },
    { No: "7", title: "Classes", subject: "Create classes and use objects", submissiondate: "2021-09-11" },
    { No: "8", title: "Paint", subject: "Paint your house", submissiondate: "2021-08-05" },
    { No: "9", title: "Lists", subject: "Display data from list", submissiondate: "2021-12-11" },
    { No: "10", title: "Delegates Basic", subject: "Exercise to use delegates", submissiondate: "2021-01-12" }
];

//Generates assignments tables from the array given for a number of times
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

generateTable("displayTable", 10);
generateTable("updateDisplay", 6);

//Create option for select from html table
function CreateOptionsFromTable(selectid, table) {
    var optable = document.getElementById(table);
    let select = document.getElementById(selectid);
    for (var i = 0; i < optable.rows.length; i++) {
        let opt = document.createElement("option");
        opt.innerHTML = (i + 1) + ". " + optable.rows[i].cells[1].innerHTML;
        select.appendChild(opt);
    }
}

CreateOptionsFromTable("selectAssignment", "updateDisplay");