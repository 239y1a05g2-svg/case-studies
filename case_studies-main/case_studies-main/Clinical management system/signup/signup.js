function signup(){
    const name=document.getElementById("fullname").value;
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    const confirmpassword=document.getElementById("confirmpassword").value;
    const message=document.getElementById("signupmessage");
            


    if ( name==="" || email==="" ||password==="" ||confirmpassword===""){
        message.innerText="please fill all feilds";
        return;
    }
    if (password === confirmpassword) {
      
        message.innerText = "You are successfully signed up!";
    } else {
        message.style.color = "red";
        message.innerText = "Passwords do not match";
    }
}
