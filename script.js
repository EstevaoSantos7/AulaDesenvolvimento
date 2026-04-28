const buttonMenu = document.querySelector(".botaoMenu")
const buttonCloseMenu = document.querySelector(".closeMenu")

const menu = document.querySelector("header nav")

if(buttonMenu){
    buttonMenu.addEventListener('click', openMenu)
}

function openMenu(){
    menu.style.right = 0;
}

if(buttonCloseMenu){
    buttonCloseMenu.addEventListener('click', closeMenu)
}

function closeMenu(){
    menu.style.right = "-100%"
}