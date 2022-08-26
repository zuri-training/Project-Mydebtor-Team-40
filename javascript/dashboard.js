// showing and hiding side panel

const sidebar = document.querySelector('#sidebar');
const showBtn = document.querySelector('.open_sidebar');
const hideBtn = document.querySelector('.cancelBtn');

showBtn.addEventListener('click', function(){
    sidebar.style.marginLeft = '0'
    showBtn.style.display = 'none'
    hideBtn.style.display = 'block'
});

hideBtn.addEventListener('click', function(){
    sidebar.style.marginLeft = '-56px'
    showBtn.style.display = 'block'
    hideBtn.style.display = 'none'
});