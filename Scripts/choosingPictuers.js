// "use strict"

let contButton = document.getElementById("continue");
let groupButtons = document.querySelectorAll('input[type="radio"]');
let goTo = document.getElementById("anchor");

document.onload = function(){
  for(let i = 0; i < groupButtons.length; i++){
    groupButtons[i].checked = false;
  }
}

let picGroup;
let groupType;

for (let i = 0; i < groupButtons.length; i++) {
  groupButtons[i].addEventListener("change", function (e) {
    picGroup = e.target.id;
    switch (picGroup) {
      case "rocket_ships":
      case "aliens":
        groupType='space_theme';
        break;
      case "Fish":
      case "boats":
        groupType='ocean_theme';
        break;
    }
    console.log('theme: '+groupType);
    console.log('picture group: '+picGroup);
    localStorage.setItem("Group", picGroup);
    localStorage.setItem("groupType", groupType);
  });
}


contButton.onclick = function () {
  switch (picGroup) {
    case "rocket_ships":
    case "aliens":
    case "Fish":
    case "boats":
      //entering cookies
        goTo.href = "../HTML/Grid4x4.html";
        break;
    default :
        alert("you must choose a picture group !")
  }
};
