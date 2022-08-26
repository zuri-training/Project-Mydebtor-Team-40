const ADMIN_SIGNIN_URL = "http://127.0.0.1:8000/auth/jwt/create"

let isSubmitting = false

const formEmail = document.getElementById("email");
const formPassword = document.getElementById("password") 

const adminSignIn = function(e){

    e.preventDefault();
    if(isSubmitting) return;

    isSubmitting = true;

    const reqBody = {
        email: formEmail.value,
        password: formPassword.value,
    }

    fetch(ADMIN_SIGNIN_URL, {
        method: "POST",
        body: JSON.stringify(reqBody)
    }).then((res) => {
        this.isSubmitting = false
        console.log(res)
        if(res.status != 200){
            throw new Error(res.message)
        }
    }).catch((err) => {
        this.isSubmitting = false
        console.error(err)
        alert("An error occured")
    })
}