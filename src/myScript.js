//show password
function myFunction() {
    var x = document.getElementById("pwd");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

function show() {
    document.getElementById("msg").style.display = "block";
}

function noshow() {
    document.getElementById("msg").style.display = "none";
}

// the checking criteria of all possible pattern
function validatePwd() {
    var myInput = document.getElementById("pwd");
    var letter = document.getElementById("letter");
    var capital = document.getElementById("capital");
    var number = document.getElementById("number");
    var length = document.getElementById("length");
    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if (myInput.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if (myInput.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    // Validate numbers
    var numbers = /[0-9]/g;
    if (myInput.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    // Validate length
    if (myInput.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
}

//check password and re-enter password
function checkPwd() {
    var pwd1 = document.getElementById("pwd").value;
    var pwd2 = document.getElementById("re").value;
    
    if (pwd1 == pwd2) {
        document.getElementById("validCheck").style.color = "green"; 
        document.getElementById("validCheck").style.fontFamily = "monospace";
         document.getElementById("validCheck").style.fontSize="20px"; 
        document.getElementById("validCheck").innerHTML = "MATCH!";
    } else {
        document.getElementById("validCheck").style.fontFamily = "monospace"; 
        document.getElementById("validCheck").style.color = "red";         document.getElementById("validCheck").style.fontSize="20px";
        document.getElementById("validCheck").innerHTML = "NOT MATCH!";
    }
    
    
}
