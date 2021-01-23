//Form validation data for adding data
function FormAddValidate() {
    let check = false;
    let oralMarkError = totalMarkError = false;
    let textError = "";

    let oralMark = document.Addform.inputOralAdd.value;
    let totalMark = document.Addform.inputTotalAdd.value;

    if (oralMark.length != 0) {
        if (oralMark < 0 || oralMark > 20) {
            textError += " # Oral mark cannot be lower than 0 or greater than 20";
            oralMarkError = true;
        }
    }

    if (totalMark.length != 0) {
        if (oralMark.length == 0) {
            textError += " # there should be an oral mark in order to provide a total mark";
            totalMarkError = true;
        } else if (totalMark <= oralMark || totalMark > 80 + parseInt(oralMark)) {
            textError += `" # Total mark cannot be lower or equal than ${oralMark} or greater than ${80 + parseInt(oralMark)}"`;
            totalMarkError = true;
        }
    }

    if (oralMarkError || totalMarkError) {
        $("#myModal .modal-body").text(textError);
        $("#myModal").modal('show');
    } else {
        check = true;
    }

    return check;
}

//Form validation data for update data
function FormUpdateValidate() {
    let check = false;
    let firstNameError = lastNameError = titleError = oralMarkError = totalMarkError = false;
    let textError = "";

    let firstName = document.Updateform.inputFirstNameUp.value;
    let lastName = document.Updateform.inputLastNameUp.value;
    let title = document.Updateform.inputTitleUp.value;
    let oralMark = document.Updateform.inputOralUp.value;
    let totalMark = document.Updateform.inputTotalUp.value;

    let regexFirst = /^[A-Z]([a-z]+)?((\s?|\-?)[A-Z]([a-z]+){1})?$/; //Matches one or two names starting witch capital letters and seperated by space or '-'
    let regexLast = /^[A-Z][a-z]+$/;
    let regexTitle = /^[A-Z][A-Za-z]+$/;

    if (firstName.length != 0) {
        if (regexFirst.test(firstName) === false) {
            textError += " # Student name should start with a capital letter. If two names exist they should be separated by a minus (-) sign or a space";
            firstNameError = true;
        }
    }

    if (lastName.length != 0) {
        if (regexLast.test(lastName) === false) {
            textError += " # Student last name should start with a capital letter";
            lastNameError = true;
        }
    }

    if (title.length != 0) {
        if (regexTitle.test(title) === false) {
            textError += " # Assignment title should not be empty and should start with a capital letter (only letters allowed)";
            titleError = true;
        }
    }

    if (oralMark.length != 0) {
        if (oralMark < 0 || oralMark > 20) {
            textError += " # Oral mark cannot be lower than 0 or greater than 20";
            oralMarkError = true;
        }
    }

    if (totalMark.length != 0) {
        if (oralMark.length == 0) {
            textError += " # there should be an oral mark in order to provide a total mark";
            totalMarkError = true;
        } else if (totalMark <= oralMark || totalMark > 80 + parseInt(oralMark)) {
            textError += `" # Total mark cannot be lower or equal than ${oralMark} or greater than ${80 + parseInt(oralMark)}"`;
            totalMarkError = true;
        }
    }

    if (firstNameError || lastNameError || titleError || oralMarkError || totalMarkError) {
        $("#myModal .modal-body").text(textError);
        $("#myModal").modal('show');
    } else {
        check = true;
    }
    return check;
}

//Function to add student / assignment
function StudentAdd(tablename) {
    if (FormAddValidate()) {
        let check = true;
        let col = document.getElementById("selectCourseAdd").selectedIndex + 1;
        let name = $("#selectStudentAdd option:selected").text().split(" ");
        let assignment = $("#selectAssignmentAdd option:selected").text().split(" ");
        let x = document.getElementById(tablename).rows;
        for (let i = 0; i < x.length; i += 2) {
            let row = x[i];
            let row2 = x[i + 1];
            if (row.cells[2 * col - 1].innerHTML === "" && row.cells[2 * col].innerHTML === "") {
                row.cells[2 * col - 1].innerHTML = name[1];
                row.cells[2 * col].innerHTML = name[2];
                row2.cells[3 * col - 2].innerHTML = assignment[1];
                row2.cells[3 * col - 1].innerHTML = document.Addform.inputOralAdd.value;
                row2.cells[3 * col].innerHTML = document.Addform.inputTotalAdd.value;
                check = false;
                break;
            }
        }

        if (check === true) {
            if (col == 1) {
                $("#" + tablename).append(`<tr>
            <td>${x.length/2 + 1}</td>
            <td>${name[1]}</td>
            <td colspan="2">${name[2]}</td>
            <td></td>
            <td colspan="2"></td>
            <td></td>
            <td colspan="2"></td></tr>
            <tr>
            <td>-</td>
            <td>${assignment[1]}</td>
            <td>${document.Addform.inputOralAdd.value}</td>
            <td>${document.Addform.inputTotalAdd.value}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td></tr>`);
            }
            if (col == 2) {
                $("#" + tablename).append(`<tr>
            <td>${x.length/2 + 1}</td>
            <td></td>
            <td colspan="2"></td>
            <td>${name[1]}</td>
            <td colspan="2">${name[2]}</td>
            <td></td>
            <td colspan="2"></td></tr>
            <tr>
            <td>-</td>
            <td></td>
            <td></td>
            <td></td>
            <td>${assignment[1]}</td>
            <td>${document.Addform.inputOralAdd.value}</td>
            <td>${document.Addform.inputTotalAdd.value}</td>
            <td></td>
            <td></td>
            <td></td></tr>`);
            }
            if (col == 3) {
                $("#" + tablename).append(`<tr>
            <td>${x.length/2 + 1}</td>
            <td></td>
            <td colspan="2"></td>
            <td></td>
            <td colspan="2"></td>
            <td>${name[1]}</td>
            <td colspan="2">${name[2]}</td></tr>
            <tr>
            <td>-</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>${assignment[1]}</td>
            <td>${document.Addform.inputOralAdd.value}</td>
            <td></td>${document.Addform.inputTotalAdd.value}</tr>`);
            }
        }
    }
    //document.getElementById("FormAdd").submit();
    document.getElementById("FormAdd").reset();
}

//Check if value length is not zero then updates in order to update only cells that have values and avoid updating with empty
function UpdateInput(inputid, cel, celnum) {
    if (!$("#" + inputid).val().length == 0) {
        if (inputid === "inputOralUp") {
            cel.cells[celnum].innerHTML = "Oral : " + $("#" + inputid).val();
        } else if (inputid === "inputTotalUp") {
            cel.cells[celnum].innerHTML = "Total : " + $("#" + inputid).val();
        } else {
            cel.cells[celnum].innerHTML = $("#" + inputid).val();
        }
    }
}

//Updates students / assignment table on html, updates only if there is any entry in a form
function StudentAssignmentUpdate(myTable) {
    if (FormUpdateValidate() == true) {
        let col = document.getElementById("selectCourseUp").selectedIndex + 1;
        let x = document.getElementById("selectStudentUp").selectedIndex;
        let y = document.getElementById("selectAssignmentUp").selectedIndex;
        let cel = document.getElementById(myTable).rows[2 * x];
        let cel2 = document.getElementById(myTable).rows[2 * y + 1];
        UpdateInput("inputFirstNameUp", cel, 2 * col - 1);
        UpdateInput("inputLastNameUp", cel, 2 * col);
        UpdateInput("inputTitleUp", cel2, 3 * col - 2);
        UpdateInput("inputOralUp", cel2, 3 * col - 1);
        UpdateInput("inputTotalUp", cel2, 3 * col);
        //document.getElementById("FormUpdate").submit();
        document.getElementById("FormUpdate").reset();
        ChangeStudentsAssignments('selectStudentUp', 'selectAssignmentUp', 'updateDisplay');
    }
}

//Method to switch between tabs, added resets to reset form on change
function openPage(pageName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.display = "";
    }

    document.getElementById(pageName).style.display = "block";
    document.getElementById("FormUpdate").reset();
}

document.getElementById("btnDisplay").click();