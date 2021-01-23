//Students table data
let items = [{ No: 1, FirstName: "Kostas", LastName: "Papadopoulos", DateOfBirth: "1980-02-18", TuitionFees: 1600 },
    { No: 2, FirstName: "Katerina", LastName: "Karagiani", DateOfBirth: "1983-03-19", TuitionFees: 2000 },
    { No: 3, FirstName: "Niki", LastName: "Oikonomou", DateOfBirth: "1981=04-25", TuitionFees: 2700 },
    { No: 4, FirstName: "Vassilis", LastName: "Papageorgiou", DateOfBirth: "1978-12-08", TuitionFees: 2000 },
    { No: 5, FirstName: "Nikolaos", LastName: "Makris", DateOfBirth: "1980-02-23", TuitionFees: 2000 },
    { No: 6, FirstName: "Giannis", LastName: "Chatzis", DateOfBirth: "1984-05-19", TuitionFees: 2200 },
    { No: 7, FirstName: "Katerina", LastName: "Lagou", DateOfBirth: "1982-07-07", TuitionFees: 2500 },
    { No: 8, FirstName: "Kostas", LastName: "Samaras", DateOfBirth: "1986-07-27", TuitionFees: 2000 },
    { No: 9, FirstName: "Vaggelis", LastName: "Marinakis", DateOfBirth: "1983-05-30", TuitionFees: 2400 },
    { No: 10, FirstName: "Maria", LastName: "Patera", DateOfBirth: "1975-12-09", TuitionFees: 1800 },
    { No: 11, FirstName: "Eirni", LastName: "Petridi", DateOfBirth: "1979-10-04", TuitionFees: 1500 },
    { No: 13, FirstName: "Nikolaos", LastName: "Vasilopoulos", DateOfBirth: "1990-03-03", TuitionFees: 1650 },
    { No: 14, FirstName: "Vasilis", LastName: "Pappas", DateOfBirth: "1991-11-05", TuitionFees: 3000 },
    { No: 15, FirstName: "George", LastName: "Kasidiaris", DateOfBirth: "1993-06-08", TuitionFees: 1800 },
    { No: 16, FirstName: "Giannis", LastName: "Anagnostopoulos", DateOfBirth: "1982-05-20", TuitionFees: 1850 },
    { No: 17, FirstName: "Kostas", LastName: "Efthimiadis", DateOfBirth: "1987-07-24", TuitionFees: 3100 },
    { No: 18, FirstName: "Maria", LastName: "Vlachou", DateOfBirth: "1990-09-10", TuitionFees: 2100 },
    { No: 19, FirstName: "Spiros", LastName: "Dimopoulos", DateOfBirth: "1989-12-08", TuitionFees: 2150 },
    { No: 20, FirstName: "George", LastName: "Antoniou", DateOfBirth: "1993-08-23", TuitionFees: 3200 }
];

//Generates students tables from the array given for a number of times
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

generateTable("displayTable", 20);
generateTable("updateDisplay", 10);

CreateOptionsFromTable("selectStudent", "updateDisplay");