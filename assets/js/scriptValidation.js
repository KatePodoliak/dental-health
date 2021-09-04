var str = document.getElementsByClassName('error');
var errorName = "Incorrect name.";
var errorGender = "Select gender.";
var errorAgeMan = "Age of the man must be over 21.";
var errorAgeWoman = "Age of the woman must be over 18.";
var errorDate = "Incorrect date value.";
var now = new Date();

function checkForm() {
    if (validateName() && validateDate() && validateGender()) {
        return true;
    } else {
        return false;
    }
}

function validateName() {
    var reg = /^[a-zа-яё]+$/i;
    if (reg.test(document.registration.username.value)) {
        str[0].innerHTML = "";
        return true;
    } else {
        showError(str[0], errorName);
    }
}

function validateGender() {
    var y = document.registration.year.value;
    var m = document.registration.month.value;
    var d = document.registration.day.value;
    var age = now.getFullYear() - y - ((now.getMonth() - --m || now.getDate() - d) < 0);
    alert((now.getMonth() - --m || now.getDate() - d) < 0);
    if (document.registration.gender[0].checked == false && document.registration.gender[1].checked == false) {
        showError(str[1], errorGender);
    } else {
        if (age < 21 && document.registration.gender[0].checked == true) {
            showError(str[1], errorAgeMan);
        } else if (age < 18 && document.registration.gender[1].checked == true) {
            showError(str[1], errorAgeWoman);
        } else {
            str[1].innerHTML = "";
            return true;
        }
    }
}

function validateDate() {
    var regD = /^[0-2]\d|3[01]$/;
    var regM = /^0[1-9]|1[012]$/;
    var regY = /^\d{4}$/;
    if (regD.test(document.registration.day.value) && regM.test(document.registration.month.value) && !(document.registration.year.value > now.getFullYear()) && regY.test(document.registration.year.value)) {
        str[2].innerHTML = "";
        return true;
    } else {
        showError(str[2], errorDate);
    }
}

function showError(arr, strError) {
    arr.innerHTML = strError;
}