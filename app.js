let form1 = document.getElementById('form1');
let appointmentName = document.getElementById('userName');
let appointmentMail = document.getElementById('userEmail');
let appointmentMessage = document.getElementById('userMessage');
let appointmentNumber = document.getElementById('userMobile');

function sendMail() {
    let params = {
        name: appointmentName.value,
        email: appointmentMail.value,
        message: appointmentMessage.value,
        number: appointmentNumber.value
    };
    
    emailjs.send("service_epwdmfi", "template_1goaq0h", params)
        .then(() => {
            alert("Email Successfully sent");

            // Clear input fields
            appointmentName.value = "";
            appointmentMail.value = "";
            appointmentMessage.value = "";
            appointmentNumber.value ="";
        })
        .catch(error => console.error("Error sending email:", error));
}

// Corrected event listener
form1.addEventListener('submit', (event)=> {
    event.preventDefault() // Prevent the page from reloading

    if (!appointmentName.value.trim()) {
        alert("Please enter your name!");
    }  
    else if (!appointmentNumber.value.trim()) {
        alert("Please enter Number!");
    }
    else if (!appointmentMail.value.trim()) {
        alert("Please enter your Email!");
    }
    else {
        sendMail();
    }
});
