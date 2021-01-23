//Form validation data for adding data
function FormAddValidate() {
    let check = false;
    let nameError = startDateError = endDateError = streamError = typeErrror = false;
    let textError = "";

    let name = document.Addform.inputTitle.value;
    let stream = document.Addform.inputStream.value;
    let type = document.Addform.inputType.value;
    let startDate = document.Addform.inputStartDate.value;
    let endDate = document.Addform.inputEndDate.value;

    let regex = /^([A-Z]{2})\d{2}$/;

    if (name.length === 0 || regex.test(name) === false) {
        textError += " # Course title should not be empty and should consist of two capital letters followed by two numbers";
        nameError = true;
    }

    if (stream.length === 0) {
        textError += " # Course stream should not be empty";
        streamError = true;
    }

    if (type.length === 0) {
        textError += " # Course type should not be empty";
        streamError = true;
    }

    if (startDate.length === 0 || Date.parse(startDate) < Date.parse(new Date())) {
        textError += " # Course start date should not be empty or earlier than today";
        startDateError = true;
    }

    if (startDate.length === 0 || endDate < startDate) {
        textError += " # Course end date should not be empty or less than course start date";
        endDateError = true;
    }

    if (nameError || startDateError || endDateError || streamError || typeErrror) {
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
    let nameError = startDateError = endDateError = false;
    let textError = "";

    let name = document.Updateform.inputTitleUp.value;
    let startDate = document.Updateform.inputStartDateUp.value;
    let endDate = document.Updateform.inputEndDateUp.value;

    let regex = /^([A-Z]{2})\d{2}$/;

    if (name.length > 0) {
        if (regex.test(name) === false) {
            textError += " # Course title should consist of two capital letters followed by two numbers";
            nameError = true;
        }
    }

    if (startDate != "") {
        if (Date.parse(startDate) < Date.parse(new Date())) {
            textError += " # Course start date should not be earlier than today";
            startDateError = true;
        }
    }

    if (endDate != "") {
        let row = document.getElementById("selectCourse").selectedIndex;
        let date = document.getElementById("updateDisplay").rows[row].cells[4].innerHTML;
        if (Date.parse(endDate) < Date.parse(date) || endDate < startDate) {
            textError += " # Course end date should not be less than course start date";
            endDateError = true;
        }
    }

    if (nameError || startDateError || endDateError) {
        $("#myModal .modal-body").text(textError);
        $("#myModal").modal('show');
    } else {
        check = true;
    }

    return check;
}

//Function to add course
function CourseAdd(tablename) {
    if (FormAddValidate() == true) {
        let x = document.getElementById(tablename).rows.length;
        $("#" + tablename).append(`<tr>
            <td>${x + 1}</td>
            <td>${document.Addform.inputTitle.value}</td>
            <td>${document.Addform.inputStream.value}</td>
            <td>${document.Addform.inputType.value}</td>
            <td>${document.Addform.inputStartDate.value}</td>
            <td>${document.Addform.inputEndDate.value}</td></tr>`);
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
            var x = document.getElementById("selectCourse").selectedIndex;
            document.getElementById("selectCourse").options[x].innerHTML = (x + 1) + ". " + document.getElementById("updateDisplay").rows[x].cells[1].innerHTML;
        }
    }
}

//Updates courses table on html, updates only if there is any entry in a form
function CourseUpdate(myTable) {
    if (FormUpdateValidate() == true) {
        var x = document.getElementById("selectCourse").selectedIndex;
        var cel = document.getElementById(myTable).rows[x];
        UpdateInput("inputTitleUp", cel, 1);
        UpdateInput("inputStreamUp", cel, 2);
        UpdateInput("inputTypeUp", cel, 3);
        UpdateInput("inputStartDateUp", cel, 4);
        UpdateInput("inputEndDateUp", cel, 5);
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