//Form validation data for update data
function FormUpdateValidate() {
    let check = false;
    let firstNameError = lastNameError = false;
    let textError = "";

    let firstName = document.getElementById("inputFirstNameUp").value;
    let lastName = document.getElementById("inputLastNameUp").value;

    let regexFirst = /^[A-Z]([a-z]+)?((\s?|\-?)[A-Z]([a-z]+){1})?$/ //Matches one or two names starting witch capital letters and seperated by space or '-'
    let regexLast = /^[A-Z][a-z]+$/;

    if (firstName.length > 0) {
        if (regexFirst.test(firstName) === false) {
            textError += " # Trainer name should start with a capital letter. If two names exist they should be separated by a minus (-) sign or a space";
            firstNameError = true;
        }
    }

    if (lastName.length > 0) {
        if (regexLast.test(lastName) === false) {
            textError += " # trainer last name should start with a capital letter";
            lastNameError = true;
        }
    }

    if (firstNameError || lastNameError) {
        $("#myModal .modal-body").text(textError);
        $("#myModal").modal('show');
    } else {
        check = true;
    }
    return check;
}

//Function to add trainer
function TrainerAdd(tablename) {
    let check = true;
    let col = document.getElementById("selectCourseAdd").selectedIndex + 1;
    let name = $("#selectTrainerAdd option:selected").text().split(" ")
    let x = document.getElementById(tablename).rows;
    for (let i = 0; i < x.length; i++) {
        let row = x[i];
        if (row.cells[2 * col - 1].innerHTML === "" && row.cells[2 * col].innerHTML === "") {
            row.cells[2 * col - 1].innerHTML = name[1];
            row.cells[2 * col].innerHTML = name[2];
            check = false;
            break;
        }
    }

    if (check === true) {
        if (col == 1) {
            $("#" + tablename).append(`<tr>
            <td>${x.length + 1}</td>
            <td>${name[1]}</td>
            <td>${name[2]}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td></tr>`);
        }
        if (col == 2) {
            $("#" + tablename).append(`<tr>
            <td>${x.length + 1}</td>
            <td></td>
            <td></td>
            <td>${name[1]}</td>
            <td>${name[2]}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td></tr>`);
        }
        if (col == 3) {
            $("#" + tablename).append(`<tr>
            <td>${x.length + 1}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>${name[1]}</td>
            <td>${name[2]}</td>
            <td></td>
            <td></td></tr>`);
        }
        if (col == 4) {
            $("#" + tablename).append(`<tr>
            <td>${x.length + 1}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>${name[1]}</td>
            <td>${name[2]}</td></tr>`);
        }
    }
    //document.getElementById("FormAdd").submit();
    document.getElementById("FormAdd").reset();
}

//Check if value length is not zero then updates in order to update only cells that have values and avoid updating with empty
function UpdateInput(inputid, cel, celnum) {
    if (!$("#" + inputid).val().length == 0) {
        cel.cells[celnum].innerHTML = $("#" + inputid).val();
    }
}

//Updates trainers table on html, updates only if there is any entry in a form
function TrainerUpdate(myTable) {
    if (FormUpdateValidate() == true) {
        let col = document.getElementById("selectCourseUp").selectedIndex + 1;
        let x = document.getElementById("selectTrainerUp").selectedIndex;
        let cel = document.getElementById(myTable).rows[x];
        UpdateInput("inputFirstNameUp", cel, 2 * col - 1);
        UpdateInput("inputLastNameUp", cel, 2 * col);
        //document.getElementById("FormUpdate").submit();
        document.getElementById("FormUpdate").reset();
        ChangeTrainers('selectTrainerUp', 'updateDisplay');
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