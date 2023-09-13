

let imgYuki = document.querySelector("#imgYuki");
let comment = document.querySelector("#comment");


function chgimg (img){
    imgYuki.src = img;
}

function makecomment(ipt){
    comment.innerHTML = ipt;
}

imgYuki.addEventListener("mouseover", function() {chgimg("../画像/ゆき/キメ顔ゆき.jpeg");});
imgYuki.addEventListener("mouseout", function() {chgimg("../画像/ゆき/ゆき坊_1.jpeg");});
imgYuki.addEventListener("click", function() {makecomment("何みてやがる、、、");});
imgYuki.addEventListener("mouseout", function() {makecomment("<br>");});