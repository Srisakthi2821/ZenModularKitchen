let userName=document.getElementById('username');
let password=document.getElementById('password');
let form=document.getElementById('form');
let errmsg=document.getElementById('errmsg')
let formSubmit=false

userName.addEventListener('change',event=>{
    if(event.target.value.length<6){
        errmsg.innerText="* User Name should be greater than or equal to 6 Characters"
    }
    else if(event.target.value.length>10){
        errmsg.textContent="* User Name should be less than or equal to 8 Characters"
    }
    else{
        errmsg.textContent=""
    }
})


password.addEventListener('change',event=>{
    let value = event.target.value;
    let length = value.length;
     // Regex patterns
     let hasUpperCase=/[A-Z]/.test(value)
     let hasLowerCase=/[a-z]/.test(value)
     let hasNumber=/[0-9]/.test(value)
     let hasSpecialChar=/[@#$%^^&*()!]/.test(value)
 
     if (length < 6) {
         errmsg.innerText = "* Password should be at least 6 characters";
     } else if (length > 8) {
         errmsg.innerText = "* Password should not exceed 8 characters";
     } else if (!hasUpperCase) {
         errmsg.innerText = "* Password must contain at least one uppercase letter";
     } else if (!hasLowerCase) {
         errmsg.innerText = "* Password must contain at least one lowercase letter";
     } else if (!hasNumber) {
         errmsg.innerText = "* Password must contain at least one number";
     } else if (!hasSpecialChar) {
         errmsg.innerText = "* Password must contain at least one special character (@, #, $, etc.)";
     } else {
         errmsg.innerText = "";  // Clear error if password is valid
     }
})