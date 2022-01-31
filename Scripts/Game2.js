let start = document.getElementById("start");
var table = document.getElementsByTagName("table")[0];
let player_state = document.getElementById("win_lose");
let selectionImages = document.querySelectorAll(".item img");

let group = "Fish";
// let group = "boats";
let source;
source = `images/ocean_theme/${group}/`;
for (let index = 0; index < selectionImages.length; index++) {
  selectionImages[index].src = `${source}/${index + 1}.PNG`;
}

var arr = [
  ["", "", "", ""],
  ["", "", "", ""],
  ["", "", "", ""],
  ["", "", "", ""],
];
function vail() {
  for (let k = 0; k < arr.length; k++) {
    for (let i = 0; i < arr[k].length; i++) {
      itrator = 0;
      itr = 0;
      for (let j = 0; j < arr[k].length; j++) {
        if (arr[k][i] == arr[k][j] || arr[k][i] == arr[j][k]) {
          itrator++;
        }
        if (itrator > 1) {
          player_state.innerText = "Fail!";
        } else {
          player_state.innerText = "Success";
        }
      }
    }
  }
}

let tmContainer = document.getElementById("time");
let time = 60;

let tt = setInterval(() => {
  time--;
  tmContainer.innerText = time;
}, 1000);

setTimeout(() => {
  clearInterval(tt);
  vail();
  console.log("arrived");
}, time * 1000);

start.addEventListener("click", function () {
  table.style.transform = "rotate(360deg)";
  table.style.visibility = "visible";
});

table.addEventListener("keyup", (e) => {
  let id = e.target.getAttribute("id");
  let arrc = id.split("");
  switch (e.target.value) {
    case "1":
      e.target.value = "";
      arr[arrc[0]].splice(arrc[1], 1, "rect");
      e.target.parentElement.children[1].children[0].src =
        selectionImages[0].src;
      e.target.parentElement.children[1].children[0].style.display = "block";
      break;
    case "2":
      e.target.value = "";
      arr[arrc[0]].splice(arrc[1], 1, "circle");
      e.target.parentElement.children[1].children[0].src =
        selectionImages[1].src;
      e.target.parentElement.children[1].children[0].style.display = "block";
      break;
    case "3":
      e.target.value = "";
      arr[arrc[0]].splice(arrc[1], 1, "triangle");

      e.target.parentElement.children[1].children[0].src =
        selectionImages[2].src;
      e.target.parentElement.children[1].children[0].style.display = "block";
      break;
    case "4":
      e.target.value = "";
      arr[arrc[0]].splice(arrc[1], 1, "star");

      e.target.parentElement.children[1].children[0].src =
        selectionImages[3].src;
      e.target.parentElement.children[1].children[0].style.display = "block";
      break;
    case "":
      break;
    default:
      e.target.value = "";
      console.log("enter valid number");
      break;
  }
  // console.log(e.target.parentElement.children[1].children[0])
});

/*---------------code for default img--------------*/
function random_location() {
  let ran = Math.floor(Math.random() * 4);
  let ran2 = Math.floor(Math.random() * 4);
  let idd = ran.toString() + ran2.toString();
  let el = document.getElementById(idd);
  el.nextElementSibling.children[0].src = `${source}${(
    ran + 1
  ).toString()}.PNG`;
  el.nextElementSibling.children[0].style.display = "block";
  el.disabled = true;
}
random_location();
