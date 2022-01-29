"use strict"

let image = document.getElementById("sora")
let picGroup = localStorage.getItem('Group');
let theme;
switch (picGroup){
    case "rocket ships":
    case "aliens":
        theme = 'space' 
        break;
    case "Fish":
    case "boats":
        theme = 'ocean'
        break;
}

//note that this path is from another folder, from main start with one . instead of two ..
let path = "../images/" + theme + " theme/"+picGroup+"/" +"3.PNG";
console.log(path);


image.src=path;
// console.log(image);
