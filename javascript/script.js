const form = document.querySelector(".sign_up--Personal");
const parent_name = document.querySelector('#parent_name') 
const namePattern = /^[a-z]{4,}$/


form.addEventListener('submit', e => {
    e.preventDefault();
    
    const parent_name = form.parent_name.value;
    const ward_name = form.ward_name.value;
    // const school = document.getElementById('#school_attended')
    // const school_name = school.options[select.selectedIndex].text;
    const reg_no = form.reg_no.value;
    const email_address = form.user_email.value
    const password = form.password.value
    const myname = "michael"
    // RegRx validation
    const parent_name_result = namePattern.test(parent_name)
    const ward_name_result = namePattern.test(ward_name)
    const my_name_result = namePattern.test(myname)

    if (parent_name_result === ""){
        console.log("this field cannot be empty")
    }else if (parent_name){
        console.log("valid entry")
    }else{
        console.log("wrong entry")
    };

    if (ward_name_result){
        console.log("valid entry")
    }else if (ward_name_result === ""){
        console.log("this field cannot be empty")
    }else{
        console.log("wrong entry")
    };    
})

