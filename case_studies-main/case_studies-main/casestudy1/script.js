function signup() {
    event.preventDefault(); // stop page reload

    const name = document.getElementById("signupName").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;
    const confirmPassword = document.getElementById("signupConfirmPassword").value;
    const message = document.querySelector(".signupMessage");

    if (password !== confirmPassword) {
        message.textContent = "Passwords do not match";
        message.style.color = "red";
    } else {
        message.textContent = "Signup successful";
        message.style.color = "blue";
    }
}
function login(){
     event.preventDefault();
        const email = document.getElementById("loginEmail").value;
            const password = document.getElementById("loginPassword").value;
                const message = document.querySelector(".loginMessage");



    if(email==="madhu123@gmail.com" && password==="1234"){
     message.textContent = "login successfull";

    }
    else{
                message.textContent = "there is mistake";

    }
}