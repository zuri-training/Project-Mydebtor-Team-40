// pulling and retuning up the student form at the click of add student button
const add_student = document.querySelector('#addStudent_Btn');
const initial_display = document.querySelector('.dashboard__student');
const student_biodata_display = document.querySelector('.student_biodata');
const sponsor_biodata_display = document.querySelector('.sponsor_biodata');
const finance_display = document.querySelector('.finance');
const return_span = document.querySelector('.dashboard_span');
const returnBtn = document.querySelector('.returnBtn');
const student_biodata_saveBtn = document.querySelector('#saveBtn_1')
const sponsor_biodata_saveBtn = document.querySelector('#saveBtn_2')
const sponsor_biodata_prevBtn = document.querySelector('#prevBtn_1')
const finance_prevBtn = document.querySelector('#prevBtn_2')
const final_submitBtn = document.querySelector('#saveBtn_3')
const overview_display = document.querySelector('.overview_page')
const editBtn = document.querySelector('#prevBtn_3')



add_student.addEventListener('click', function(){
    initial_display.style.display = 'none';
    student_biodata_display.style.display = 'block';
    // return_span.style.display = 'inline';
});

// return to the dashboard (out of the form)
// returnBtn.addEventListener('click', function(){
//     initial_display.style.display = 'flex';
//     // return_span.style.display = 'none';
//     student_biodata_display.style.display = 'none';
//     sponsor_biodata_display.style.display = 'none';
//     finance_display.style.display = 'none';
// });
// go to sponsor page from student page
student_biodata_saveBtn.addEventListener('click', function(){
    student_biodata_display.style.display = 'none';
    sponsor_biodata_display.style.display = 'block';
    // return_span.style.display = 'inline';
    // pickup()
});

// go to finance page from sponsor page
sponsor_biodata_saveBtn.addEventListener('click', function(){
    sponsor_biodata_display.style.display = 'none';
    finance_display.style.display = 'block';
    // return_span.style.display = 'inline';
});


// return to student biodata page form sponsor page
sponsor_biodata_prevBtn.addEventListener('click', function(){
    student_biodata_display.style.display = 'block';
    sponsor_biodata_display.style.display = 'none';
    // return_span.style.display = 'inline';
});

// return to sponsor biodata page form finance page
finance_prevBtn.addEventListener('click', function(){
    finance_display.style.display = 'none';
    sponsor_biodata_display.style.display = 'block';
    // return_span.style.display = 'inline';
});


// navigating from finance page to overview

final_submitBtn.addEventListener("click", function(){
    finance_display.style.display = "none";
    overview_display.style.display = "block";
    pickup();
});

editBtn.addEventListener("click", function(){
    overview_display.style.display = "none";
    student_biodata_display.style.display = "block";
});




// uploading student image 
const img = document.querySelector('#img');
const upload_Button = document.querySelector('.uploadBtn');
const picture_file = document.querySelector('#profile_picture');

picture_file.addEventListener('change', function(){
    const chooseFile = this.files[0];

    if (chooseFile){
        const reader = new FileReader();

        reader.addEventListener('load', function(){
            img.setAttribute('src', reader.result)
        });

        reader.readAsDataURL(chooseFile);
    }
});

// picking details from the form to general overview


function pickup(){
    // student info
    const firstname_fill = document.getElementById('firstname_fill').value;
    const middlename_fill = document.getElementById('mid_name_fill').value;
    const lastname_fill = document.getElementById('lastname_fill').value;
    const gender_fill = document.getElementById('gender_fill').value;
    const class_fill = document.getElementById('class_fill').value;
    const DOB_fill = document.getElementById('DOB_fill').value;
    const state_fill = document.getElementById('state_fill').value;
    const nationality_fill = document.getElementById('nationality_fill').value;
    const address_fill = document.getElementById('address_fill').value;

    // **************
    document.querySelector('.dtr_FN').innerText = firstname_fill;
    document.querySelector('.dtr_DB').innerText = DOB_fill;
    document.querySelector('.dtr_SO').innerText = state_fill;
    document.querySelector('.dtr_MN').innerText = middlename_fill;
    document.querySelector('.dtr_GR').innerText = gender_fill;
    document.querySelector('.dtr_NT').innerText = nationality_fill;
    document.querySelector('.dtr_LN').innerText = lastname_fill;
    document.querySelector('.dtr_Cls').innerText = class_fill;
    document.querySelector('.dtr_RA').innerText = address_fill;

    // sponsor info

    const Sfirstname_fill = document.getElementById('Sfirstname_fill').value;
    const relationship_fill = document.getElementById('relationship_fill').value;
    const Slastname_fill = document.getElementById('Slastname_fill').value;
    const Sgender_fill = document.getElementById('Sgender_fill').value;
    const nin_fill = document.getElementById('nin_fill').value;
    const email_fill = document.getElementById('email_fill').value;
    const Sstate_fill = document.getElementById('Sstate_fill').value;
    const Saddress_fill = document.getElementById('Saddress_fill').value;
    const Sphone_fill = document.getElementById('').value

    // **************
    document.querySelector('.S_FN').innerText = Sfirstname_fill;
    document.querySelector('.S_RL').innerText = relationship_fill;
    document.querySelector('.dtr_SO').innerText = state_fill;
    document.querySelector('.S_email').innerText = email_fill;
    document.querySelector('.S_GR').innerText = Sgender_fill;
    document.querySelector('.S_phone').innerText = Sphone_fill;
    document.querySelector('.S_LN').innerText = Slastname_fill;
    document.querySelector('.S_nin').innerText = class_fill;
    document.querySelector('.S_address').innerText = Saddress_fill;



}