"use strict"
let startButton = document.getElementById("start-btn")
let groupButtons = document.querySelectorAll("input[type=button]")


for(let i=0; i<groupButtons.length; i++){
    groupButtons[i].addEventListener('click',function(e){
        let clicedkBtn = e.target.id;
        console.log(clicedkBtn);
        localStorage.setItem('Group', clicedkBtn);
    })
}
