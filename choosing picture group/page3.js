"use strict"
let contButton = document.getElementById("continue")
let groupButtons = document.querySelectorAll("input[type=button]")
let goTo = document.getElementById('anchor');

let picGroup;

for(let i=0; i<groupButtons.length; i++){
    groupButtons[i].addEventListener('click',function(e){
        picGroup = e.target.id;
        console.log(picGroup);
        localStorage.setItem('Group', picGroup);
    })
}

contButton.onclick = function(){
    switch (picGroup){
        case "rocket_ships":
        case "aliens":
            goTo.href="../Game.html"
            break;
        case "Fish":
        case "boats":
            goTo.href="../Game2.html"
            break;
    }
}
