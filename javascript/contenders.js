const total_contender = document.querySelector("#totalBtn");
const pending_contender = document.querySelector("#pendingBtn");
const resolved_contender = document.querySelector("#resolvedBtn");
const total_list = document.querySelector(".total_contenders");
const pending_list = document.querySelector('.pending_contenders');
const resolved_list = document.querySelector('.resolved_contenders')


total_contender.addEventListener('click', function(){
    total_list.style.display = "block"
    pending_list.style.display = "none"
    resolved_list.style.display = 'none'

    pending_contender.classList.remove('active');
    resolved_contender.classList.remove('active');
    total_contender.classList.add('active');
})

pending_contender.addEventListener('click', function(){
    total_list.style.display = "none"
    pending_list.style.display = "block"
    resolved_list.style.display = 'none'

    total_contender.classList.remove('active');
    resolved_contender.classList.remove('active');
    pending_contender.classList.add('active');
})

resolved_contender.addEventListener('click', function(){
    total_list.style.display = "none"
    pending_list.style.display = "none"
    resolved_list.style.display = 'block'

    total_contender.classList.remove('active');
    pending_contender.classList.remove('active');
    resolved_contender.classList.add('active');
})