

var table = document.getElementsByTagName("table")[0];
let player_state = document.getElementById("win_lose");
var arr = [
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""]

]
function vail() {
    let care = true
    let state = true


    for (let k = 0; k < arr.length; k++) {

        for (let i = 0; i < arr[k].length; i++) {
            itrator = 0;
            for (let j = 0; j < arr[k].length; j++) {
                if (arr[k][i] == arr[k][j]) {
                    itrator++;
                }
                if (itrator > 1) {
                    state = false
                }
            }
        }
    }

    for (let k = 0; k < arr.length; k++) {
        for (let i = 0; i < arr[k].length; i++) {
            itr = 0;
            for (let j = 0; j < arr[k].length; j++) {
                if (arr[k][i] == arr[j][k]) {
                    itr++;
                }
                if (itr > 1) {
                    care = false
                }
            }
        }

    }
    if (state && care) {
        player_state.innerText = "you solved right";
    } else {
        player_state.innerText = "you solved wrong";

    }
}

let tmContainer = document.getElementById("time");
let time = 60;

let tt = setInterval(() => {
    time--
    tmContainer.innerText = time
}, 1000)


setTimeout(() => {
    clearInterval(tt)
    vail();
    console.log("arrived")
}, time * 1000)



table.addEventListener('keyup', (e) => {
    let id = e.target.getAttribute("id");
    let arrc = id.split("");
    switch (e.target.value) {
        case "1":
            e.target.value = "";
            arr[+arrc[0]].splice(+arrc[1], 1, "rect")
            e.target.parentElement.children[1].children[0].src = "./img/rect.png"
            // e.target.parentElement.children[1].children[0].name = "rect"

            e.target.parentElement.children[1].children[0].style.display = "block"
            break;
        case "2":
            e.target.value = "";
            arr[+arrc[0]].splice(+arrc[1], 1, "circle")
            e.target.parentElement.children[1].children[0].src = "./img/circle.png"
            e.target.parentElement.children[1].children[0].name = "circle"

            e.target.parentElement.children[1].children[0].style.display = "block"
            break;
        case "3":
            e.target.value = "";
            arr[+arrc[0]].splice(+arrc[1], 1, "triangle")

            e.target.parentElement.children[1].children[0].src = "./img/triangle.png"
            e.target.parentElement.children[1].children[0].name = "triangle"

            e.target.parentElement.children[1].children[0].style.display = "block"
            break;
        case "4":
            e.target.value = "";
            arr[+arrc[0]].splice(+arrc[1], 1, "star")

            e.target.parentElement.children[1].children[0].src = "./img/star.png"
            e.target.parentElement.children[1].children[0].name = "triangle"

            e.target.parentElement.children[1].children[0].style.display = "block"
            break;
        case "":
            break;
        default:
            e.target.value = "";
            console.log("enter valid number");
            break;
    }
    console.log(e.target.parentElement.children[1].children[0])
})



/*---------------code for default img--------------*/
function random_location() {
    let ran = Math.floor(Math.random() * 4)
    let ran2 = Math.floor(Math.random() * 4)
    let idd = ran.toString() + ran2.toString();
    let el = document.getElementById(idd);
    el.nextElementSibling.children[0].style.display = "block";
    el.disabled = true;
}
random_location()

