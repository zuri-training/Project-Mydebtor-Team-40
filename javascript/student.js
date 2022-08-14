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



add_student.addEventListener('click', function(){
    initial_display.style.display = 'none';
    student_biodata_display.style.display = 'block';
    // return_span.style.display = 'inline';
})

// return to the dashboard (out of the form)
returnBtn.addEventListener('click', function(){
    initial_display.style.display = 'flex';
    // return_span.style.display = 'none';
    student_biodata_display.style.display = 'none';
    sponsor_biodata_display.style.display = 'none';
    finance_display.style.display = 'none';
})
// go to sponsor page from student page
student_biodata_saveBtn.addEventListener('click', function(){
    student_biodata_display.style.display = 'none';
    sponsor_biodata_display.style.display = 'block';
    // return_span.style.display = 'inline';
})

// go to finance page from sponsor page
sponsor_biodata_saveBtn.addEventListener('click', function(){
    sponsor_biodata_display.style.display = 'none';
    finance_display.style.display = 'block';
    // return_span.style.display = 'inline';
})


// return to student biodata page form sponsor page
sponsor_biodata_prevBtn.addEventListener('click', function(){
    student_biodata_display.style.display = 'block';
    sponsor_biodata_display.style.display = 'none';
    // return_span.style.display = 'inline';
})

// return to sponsor biodata page form finance page
finance_prevBtn.addEventListener('click', function(){
    finance_display.style.display = 'block';
    sponsor_biodata_display.style.display = 'none';
    // return_span.style.display = 'inline';
})


// navigating student biodata pages




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