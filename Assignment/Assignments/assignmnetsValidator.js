//Form validation data for adding data
function FormAddValidate() {
    let check = false;
    let titleError = subDateError = false;
    let textError = "";

    let title = document.Addform.inputTitle.value;
    let subdate = document.Addform.inputSubDate.value;

    let regex = /^[A-Z][A-Za-z]+$/;

    if (title.length === 0 || regex.test(title) === false) {
        textError += " # Assignment title should not be empty and should start with a capital letter (only letters allowed)";
        titleError = true;
    }

    if (subdate.length === 0 || Date.parse(subdate) < Date.parse(new Date())) {
        textError += " # Assignment start date should not be empty or earlier than today";
        subDateError = true;
    }

    if (titleError || subDateError) {
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
    let titleError = subDateError = false;
    let textError = "";

    let title = document.Updateform.inputTitleUp.value;
    let subdate = document.Updateform.inputSubDateUp.value;

    let regex = /^[A-Z][A-Za-z]+$/;

    if (title.length != 0) {
        if (regex.test(title) === false) {
            textError += " # Assignment title should start with a capital letter (only letters allowed)";
            titleError = true;
        }
    }

    if (subdate != "") {
        if (Date.parse(subdate) < Date.parse(new Date())) {
            textError += " # Assignment start date should not be earlier than today";
            subDateError = true;
        }
    }

    if (titleError || subDateError) {
        $("#myModal .modal-body").text(textError);
        $("#myModal").modal('show');
    } else {
        check = true;

        return check;
    }
}

//Function to add assignment
function AssignmentAdd(tablename) {
    if (FormAddValidate() == true) {
        let x = document.getElementById(tablename).rows.length;
        $("#" + tablename).append(`<tr>
            <td>${x + 1}</td>
            <td>${document.Addform.inputTitle.value}</td>
            <td>${document.Addform.inputDescription.value}</td>
            <td>${document.Addform.inputSubDate.value}</td></tr>`);
        //document.Addform.submit();    
        document.Addform.reset();
    }
}

//Check if value length is not zero then updates in order to update only cells that have values and avoid updating with empty
//Also updates option list if title is updated
function UpdateInput(inputid, cel, celnum) {
    if (!$("#" + inputid).val().length == 0) {
        cel.cells[celnum].innerHTML = $("#" + inputid).val();
        if (inputid === "inputTitleUp") {
            var x = document.getElementById("selectAssignment").selectedIndex;
            document.getElementById("selectAssignment").options[x].innerHTML = (x + 1) + ". " + document.getElementById("updateDisplay").rows[x].cells[1].innerHTML;
        }
    }
}

//Updates assignments table on html, updates only if there is any entry in a form
function AssignmentUpdate(myTable) {
    if (FormUpdateValidate() == true) {
        var x = document.getElementById("selectAssignment").selectedIndex;
        var cel = document.getElementById(myTable).rows[x];
        UpdateInput("inputTitleUp", cel, 1);
        UpdateInput("inputDescriptionUp", cel, 2);
        UpdateInput("inputSubDateUp", cel, 3);
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