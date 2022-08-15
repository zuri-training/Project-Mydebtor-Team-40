const new_messageBtn = document.querySelector("#newMessage");
const start_messaging = document.querySelector(".start_messaging");
const messaging_arena = document.querySelector(".messaging_arena");

new_messageBtn.addEventListener('click', function(){
    start_messaging.style.display = 'none'
    messaging_arena.style.display = 'block'
})