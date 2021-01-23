//Form validation data for adding data
function FormAddValidate() {
    let check = false;
    let firstNameError = lastNameError = subjectError = false;
    let textError = "";

    let firstName = document.Addform.inputFirstName.value;
    let lastName = document.Addform.inputLastName.value;
    let subject = document.Addform.inputSubject.value;

    let regexFirst = /^[A-Z]([a-z]+)?((\s?|\-?)[A-Z]([a-z]+){1})?$/ //Matches one or two names starting witch capital letters and seperated by space or '-'
    let regexLast = /^[A-Z][a-z]+$/;

    if (firstName.length === 0 || regexFirst.test(firstName) === false) {
        textError += " # Trainer name should start with a capital letter. If two names exist they should be separated by a minus (-) sign or a space";
        firstNameError = true;
    }

    if (lastName.length === 0 || regexLast.test(lastName) === false) {
        textError += " # Trainer last name should start with a capital letter";
        lastNameError = true;
    }

    if (subject.length === 0) {
        textError += " # Trainer subject should not be empty";
        subjectError = true;
    }

    if (firstNameError || lastNameError || subjectError) {
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
    let firstNameError = lastNameError = false;
    let textError = "";

    let firstName = document.Updateform.inputFirstNameUp.value;
    let lastName = document.Updateform.inputLastNameUp.value;

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
            textError += " # Trainer last name should start with a capital letter";
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
    if (FormAddValidate() == true) {
        let x = document.getElementById(tablename).rows.length;
        $("#" + tablename).append(`<tr>
            <td>${x + 1}</td>
            <td>${document.Addform.inputFirstName.value}</td>
            <td>${document.Addform.inputLastName.value}</td>
            <td>${document.Addform.inputSubject.value}</td></tr>`);
        //document.Addform.submit();
        document.Addform.reset();
    }
}

//Check if value length is not zero then updates in order to update only cells that have values and avoid updating with empty
//Also updates option list if first name or last name is to be updated
function UpdateInput(inputid, cel, celnum) {
    if (!$("#" + inputid).val().length == 0) {
        cel.cells[celnum].innerHTML = $("#" + inputid).val();
        if (inputid === "inputFirstNameUp" || inputid === "inputLastNameUp") {
            var x = document.getElementById("selectTrainer").selectedIndex;
            let row = document.getElementById("updateDisplay").rows[x];
            document.getElementById("selectTrainer").options[x].innerHTML = (x + 1) + ". " + row.cells[1].innerHTML + " " + row.cells[2].innerHTML;
        }
    }
}

//Updates trainers table on html, updates only if there is any entry in a form
function TrainerUpdate(myTable) {
    if (FormUpdateValidate() == true) {
        let x = document.getElementById("selectTrainer").selectedIndex;
        let cel = document.getElementById(myTable).rows[x];
        UpdateInput("inputFirstNameUp", cel, 1);
        UpdateInput("inputLastNameUp", cel, 2);
        UpdateInput("inputSubjectUp", cel, 3);
        //document.Updateform.submit();
        document.Updateform.reset();
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
    document.getElementById("FormAdd").reset();
    document.getElementById("FormUpdate").reset();
}

document.getElementById("btnDisplay").click();