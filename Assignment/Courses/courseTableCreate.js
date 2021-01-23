//Courses table data
let items = [{ No: "1", title: "CB12", stream: "C#", type: "Online", startdate: "2021-02-14", enddate: "2021-07-20" },
    { No: "2", title: "CB8", stream: "C#", type: "Full Time", startdate: "2021-03-13", enddate: "2021-09-12" },
    { No: "3", title: "CB10", stream: "Java", type: "Online", startdate: "2021-07-24", enddate: "2021-12-30" },
    { No: "4", title: "CB9", stream: "Javascript", type: "Part Time", startdate: "2021-08-21", enddate: "2021-11-18" },
    { No: "5", title: "CB2", stream: "CSS", type: "Full Time", startdate: "2021-02-30", enddate: "2021-05-15" },
    { No: "6", title: "CB4", stream: "Java", type: "Part Time", startdate: "2021-02-15", enddate: "2021-08-01" },
    { No: "7", title: "CB12", stream: "C++", type: "Part Time", startdate: "2021-05-24", enddate: "2021-08-13" },
    { No: "8", title: "CB10", stream: "HTML", type: "Full Time", startdate: "2021-06-18", enddate: "2021-12-25" },
    { No: "9", title: "CB7", stream: "C#", type: "Online", startdate: "2021-05-09", enddate: "2021-07-09" },
    { No: "10", title: "CB6", stream: "Java", type: "Full Time", startdate: "2021-01-05", enddate: "2021-07-14" }
];

let stream = ["", "C#", "Java", "HTML", "SQL", "Javascript", "Ruby", "Python", "C++", "C--", "Subjective-C"];
let type = ["", "Full time", "Part time", "Online", "Offline", "Inline", "Outline"];

//Generates courses tables from the array given for a number of times
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
    for (let i = 0; i < optable.rows.length; i++) {
        let opt = document.createElement("option");
        opt.innerHTML = (i + 1) + ". " + optable.rows[i].cells[1].innerHTML;
        select.appendChild(opt);
    }
}

//Creates options for select from stream array
function CreateSelectStreamOptions(selectid) {
    let select = document.getElementById(selectid);
    for (let i = 0; i < stream.length; i++) {
        let opt = document.createElement("option"); //<option>asfaf</option>
        opt.innerHTML = stream[i];
        select.appendChild(opt);
    }
}

//Creates options for select from type array
function CreateSelectTypeOptions(selectid) {
    let select = document.getElementById(selectid);
    for (let i = 0; i < type.length; i++) {
        let opt = document.createElement("option");
        opt.innerHTML = type[i];
        select.appendChild(opt);
    }
}

CreateOptionsFromTable("selectCourse", "updateDisplay");
CreateSelectStreamOptions("inputStream");
CreateSelectTypeOptions("inputType");
CreateSelectStreamOptions("inputStreamUp");
CreateSelectTypeOptions("inputTypeUp");