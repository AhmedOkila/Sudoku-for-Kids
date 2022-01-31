"use strict"

let image = document.getElementById("sora");
let div = document.getElementById('div');
let picGroup = localStorage.getItem('Group');
let backGround;
let theme;
switch (picGroup){
    case "rocket_ships":
    case "aliens":
        theme = 'space_'
        //backGround = 'spacebg.jpg'
        break;
    case "Fish":
    case "boats":
        theme = 'ocean_'
        //backGround = 'ocean.jpg'
        break;
}

//note that this path is from another folder, from main start with one . instead of two ..
let picPath = "../images/" + theme + "theme/"+picGroup+"/" +"2.PNG";
//let bgPath = "../images/" + theme + "theme/" + backGround;

console.log(picPath);
//console.log(bgPath);


image.src=picPath;
//div.style.backgroundImage = `url(${bgPath})`;
// console.log(image);
