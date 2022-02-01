let start = document.getElementById("start");
var table = document.getElementsByTagName("table")[0];
let player_state = document.getElementById("win_lose");
let selectionImages = document.querySelectorAll(".item img");
let body = document.body;
let timeContainerh1 = document.querySelector(".timeContainer h1");
let nameContainer = document.querySelector(".nameContainer h1");
let scoreContainer = document.querySelector(".scoreContainer h1");
let ResultContainer = document.querySelector(".ResultContainer h1");
let tableCells = document.querySelectorAll(".editValue");
let ReferencesImages = document.querySelectorAll(".groupSelected .item");

//let group = localStorage.getItem("Group");
//let groupType = localStorage.getItem("groupType");
// console.log(group);
let group = localStorage.getItem("Group");
let groupType = localStorage.getItem("groupType");
let source;
source = `../images/${groupType}/${group}/`;

(function groupSwitching() {
  if (groupType == "ocean_theme") {
    body.style.backgroundImage = "url(../images/ocean_theme/ocean3.jpg)";
    start.style.backgroundColor = "#00405e";
    start.style.border = "5px solid #011324";
    timeContainerh1.style.backgroundColor = "#00405e";
    timeContainerh1.style.border = "5px solid #011324";
    nameContainer.style.backgroundColor = "#00405e";
    nameContainer.style.border = "5px solid #011324";
    scoreContainer.style.backgroundColor = "#00405e";
    scoreContainer.style.border = "5px solid #011324";
    ResultContainer.style.backgroundColor = "#00405e";
    ResultContainer.style.border = "5px solid #011324";
    for (let index = 0; index < tableCells.length; index++) {
      tableCells[index].style.backgroundColor = "#00405e";
      tableCells[index].style.border = "5px solid #011324";
    }
    for (let index = 0; index < ReferencesImages.length; index++) {
      ReferencesImages[index].style.border = "5px solid #011324";
    }
  }
})();

for (let index = 0; index < selectionImages.length; index++) {
  selectionImages[index].src = `${source}/${index + 1}.png`;
}

var arr = [
  ["", "", "", ""],
  ["", "", "", ""],
  ["", "", "", ""],
  ["", "", "", ""],
];
function vail() {
  let care = true;
  let state = true;
  for (let k = 0; k < arr.length; k++) {
    for (let i = 0; i < arr[k].length; i++) {
      itrator = 0;
      itr = 0;
      for (let j = 0; j < arr[k].length; j++) {
        if (arr[k][i] == arr[k][j]) {
          itrator++;
        }
        if (arr[k][i] == arr[j][k]) {
          itr++;
        }
        if (itrator > 1) {
          state = false;
        }
        if (itr > 1) {
          care = false;
        }
      }
    }
  }
  if (state && care) {
    //player_state.innerText = "Success";
    return true;
  } else {
    //player_state.innerText = "Fail!";
    return false;
  }
}

function changeStatus(isValid) {
  if (isValid) {
    player_state.innerText = "Success";
  } else {
    player_state.innerText = "Fail!";
  }
}

let tmContainer = document.getElementById("time");
//changing time to try popup
let time = 100;

let tt;
let Flag = 1;

/* ****check if array is empty**** */
function checkIfEmpty() {
  let checker = 0;
  // loop the outer array
  for (let i = 0; i < arr.length; i++) {
    // get the size of the inner array
    var innerArrayLength = arr[i].length;
    // loop the inner array
    for (let j = 0; j < innerArrayLength; j++) {
      if (arr[i][j]) {
      } else {
        checker++;
      }
    }
  }
  if (checker > 0) {
    return false;
  } else {
    return true;
  }
}

// function actionOnSuccess(){}
function actionOnSuccess() {
  if (checkIfEmpty()) {
    if (vail()) {
      //success
      popup.className = "window";
      popup.style.display = "block";
      popup.style.border = "5px solid green";
      popup.style.color = "green";
      message.innerText = "SUCCESS";
      start.disabled = true;
      player_state.innerText = "Success";
      clearInterval(tt);
    } 
  }
}

//action based on win or lose
function actionOnResult() {
  if (player_state.innerText == "Fail!") {
    popup.className = "window";
    popup.style.display = "block";
    popup.style.border = "5px solid crimson";
    popup.style.color = "red";
    message.innerText = "FAIL !";
    start.disabled = true;
  } else {
    popup.className = "window";
    popup.style.display = "block";
    popup.style.border = "5px solid green";
    popup.style.color = "green";
    message.innerText = "SUCCESS";
    start.disabled = true;
  }
}

//play again button
//check if the sent variables of picture and picgroup are still available !!
playagain.onclick = function () {
  window.location.reload();
};

start.addEventListener("click", function () {
  table.style.transform = "rotate(360deg)";
  table.style.visibility = "visible";
  if (Flag == 1) {
    tt = setInterval(() => {
      time--;
      tmContainer.innerText = time;
    }, 1000);
    setTimeout(() => {
      clearInterval(tt);
      //vail();
      changeStatus(vail());
      //for popup
      actionOnResult();
    }, time * 1000);
  }
  Flag = 0;
});

table.addEventListener("keyup", (e) => {
  let currentInput = document.activeElement;
  let currentTd = currentInput.parentNode.parentNode;
  let currentTr = currentTd.parentNode;
  let index = Array.from(currentTr.children).indexOf(currentTd);
  let id = e.target.getAttribute("id");
  let arrc = id.split("");

  switch (e.key) {
    case "ArrowLeft":
      // Left pressed
      if (!(currentTd.previousElementSibling.getElementsByTagName("input")[0]).disabled) {
        currentTd.previousElementSibling.getElementsByTagName("input")[0].focus();
      }
      else
      {
        currentTd.previousElementSibling.previousElementSibling.getElementsByTagName("input")[0].focus();
      }
      break;
    case "ArrowRight":
      // Right pressed
      if (!(currentTd.nextElementSibling.getElementsByTagName("input")[0]).disabled) {
        currentTd.nextElementSibling.getElementsByTagName("input")[0].focus();
      }
      else
      {
        currentTd.nextElementSibling.nextElementSibling.getElementsByTagName("input")[0].focus();
      }
      break;
    case "ArrowUp":
      // Up pressed
      if (!(Array.from(currentTr.previousElementSibling.children)[index].getElementsByTagName("input")[0]).disabled) {
        Array.from(currentTr.previousElementSibling.children)[index].getElementsByTagName("input")[0].focus();
      }
      else
      {
        Array.from(currentTr.previousElementSibling.previousElementSibling.children)[index].getElementsByTagName("input")[0].focus();
      }
      break;
    case "ArrowDown":
      // Down pressed
      if (!(Array.from(currentTr.nextElementSibling.children)[index].getElementsByTagName("input")[0]).disabled) {
        Array.from(currentTr.nextElementSibling.children)[index].getElementsByTagName("input")[0].focus();
      }
      else
      {
        Array.from(currentTr.nextElementSibling.nextElementSibling.children)[index].getElementsByTagName("input")[0].focus();
      }
     
      break;
  }

  switch (e.target.value) {
    case "1":
      e.target.value = "";
      arr[arrc[0]].splice(arrc[1], 1, "1");
      e.target.parentElement.children[1].children[0].src =
        selectionImages[0].src;
      e.target.parentElement.children[1].children[0].style.display = "block";
      actionOnSuccess();
      break;
    case "2":
      e.target.value = "";
      arr[arrc[0]].splice(arrc[1], 1, "2");
      e.target.parentElement.children[1].children[0].src =
        selectionImages[1].src;
      e.target.parentElement.children[1].children[0].style.display = "block";
      actionOnSuccess();
      break;
    case "3":
      e.target.value = "";
      arr[arrc[0]].splice(arrc[1], 1, "3");
      e.target.parentElement.children[1].children[0].src =
        selectionImages[2].src;
      e.target.parentElement.children[1].children[0].style.display = "block";
      actionOnSuccess();
      break;
    case "4":
      e.target.value = "";
      arr[arrc[0]].splice(arrc[1], 1, "4");
      e.target.parentElement.children[1].children[0].src =
        selectionImages[3].src;
      e.target.parentElement.children[1].children[0].style.display = "block";
      actionOnSuccess();
      break;
    case "":
      break;
    default:
      e.target.value = "";
      console.log("enter valid number");
      break;
  }
});

/*---------------code for default img--------------*/
let diff_img = [];
let diff_img_col = [];

function random_location() {
  for (let i = 0; i < arr.length; i++) {
    let ran = Math.floor(Math.random() * 4);
    let ran2 = Math.floor(Math.random() * 4);
    while (diff_img.indexOf(ran) > -1 || diff_img_col.indexOf(ran2) > -1) {
      if (diff_img.indexOf(ran) > -1) {
        ran = Math.floor(Math.random() * 4);
      } else {
        ran2 = Math.floor(Math.random() * 4);
      }
    }
    let idd = ran.toString() + ran2.toString();
    diff_img.push(ran);
    diff_img_col.push(ran2);
    let el = document.getElementById(idd);
    arr[ran].splice(ran2, 1, (i + 1).toString());
    el.nextElementSibling.children[0].src = `${source}/${i + 1}.PNG`;
    el.nextElementSibling.children[0].style.display = "block";
    el.disabled = true;
    console.log(`source: ${source}`);
    console.log(`group: ${group}`);
  }
}

random_location();
