var sideBar = document.getElementById('component__sideBar')
var hideButton = document.getElementById('btn__hide')
var showSideBar = document.getElementById('component_sideBar--toggle')

hideButton.addEventListener('click',() => {
    sideBar.classList.toggle("component__sideBar--hidden");
    showSideBar.classList.toggle("component__sideBar--hidden");
})

showSideBar.addEventListener('click',()=>{
    sideBar.classList.toggle("component__sideBar--hidden");
    showSideBar.classList.toggle("component__sideBar--hidden");
})