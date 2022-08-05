// showing and hiding side panel

const sidebar = document.querySelector('#sidebar');
const showBtn = document.querySelector('.open_sidebar');
const hideBtn = document.querySelector('.cancelBtn');

showBtn.addEventListener('click', function(){
    sidebar.style.marginLeft = '-40px'
    // let margin_count = -430;
    // const timer  = setInterval(() => {
    //     sidebar.style.marginLeft = `${margin_count}px`;
    //     if (margin_count === 0){
    //         clearInterval(timer);
    //     }else {
    //         margin_count++;
    //     }
    // }, 1)
});
hideBtn.addEventListener('click', function(){
    sidebar.style.marginLeft = "-430px"
});