//Form validation data for update data
function FormUpdateValidate() {
    let check = false;
    let titleError = false;
    let textError = "";

    let title = document.Updateform.inputTitleUp.value;

    let regex = /^[A-Z][A-Za-z]+$/;

    if (title.length != 0) {
        if (regex.test(title) === false) {
            textError += " # Assignment title should not be empty and should start with a capital letter (only letters allowed)";
            titleError = true;
        }
    }

    if (titleError) {
        $("#myModal .modal-body").text(textError);
        $("#myModal").modal('show');
    } else {
        check = true;

        return check;
    }
}

//Function to add assignment
function AssignmentAdd(tablename) {
    let check = true;
    let col = document.getElementById("selectCourseAdd").selectedIndex + 1;
    let firstSplit = $("#selectAssignmentAdd option:selected").text().split(". ");
    let name = firstSplit[1].split(": ");
    let x = document.getElementById(tablename).rows;
    for (let i = 0; i < x.length; i++) {
        let row = x[i];
        if (row.cells[2 * col - 1].innerHTML === "" && row.cells[2 * col].innerHTML === "") {
            row.cells[2 * col - 1].innerHTML = name[0];
            row.cells[2 * col].innerHTML = name[1];
            check = false;
            break;
        }
    }

    if (check === true) {
        if (col == 1) {
            $("#" + tablename).append(`<tr>
            <td>${x.length + 1}</td>
            <td>${name[0]}</td>
            <td>${name[1]}</td>
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
            <td>${name[0]}</td>
            <td>${name[1]}</td>
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
            <td>${name[0]}</td>
            <td>${name[1]}</td></tr>`);
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

//Updates assignments table on html, updates only if there is any entry in a form
function AssignmentUpdate(myTable) {
    if (FormUpdateValidate() == true) {
        let col = document.getElementById("selectCourseUp").selectedIndex + 1;
        let x = document.getElementById("selectAssignmentUp").selectedIndex;
        let cel = document.getElementById(myTable).rows[x];
        UpdateInput("inputTitleUp", cel, 2 * col - 1);
        UpdateInput("inputDescriptionUp", cel, 2 * col);
        //document.getElementById("FormUpdate").submit();
        document.getElementById("FormUpdate").reset();
        ChangeAssignments('selectAssignmentUp', 'updateDisplay');
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