
// ゆき
let ykAction1 = document.querySelector("#ykAction1");
let ykAction2 = document.querySelector("#ykAction2");
let ykAction3 = document.querySelector("#ykAction3");

// ヤマト
let yAction1 = document.querySelector("#yAction1");
let yAction2 = document.querySelector("#yAction2");
let yAction3 = document.querySelector("#yAction3");

// まつ
let mAction1 = document.querySelector("#mAction1");
let mAction2 = document.querySelector("#mAction2");
let mAction3 = document.querySelector("#mAction3");

// たま
let tAction1 = document.querySelector("#tAction1");
let tAction2 = document.querySelector("#tAction2");
let tAction3 = document.querySelector("#tAction3");

function makecomment(ipt){
    comment.innerHTML = ipt;
}

// ゆき
ykAction1.addEventListener("click",function() {makecomment("");});
ykAction2.addEventListener("click",function() {makecomment("");});
ykAction3.addEventListener("click",function() {makecomment("");});

// ヤマト
yAction1.addEventListener("click",function() {makecomment("");});
yAction2.addEventListener("click",function() {makecomment("");});
yAction3.addEventListener("click",function() {makecomment("");});

// まつ
mAction1.addEventListener("click",function() {makecomment("");});
mAction2.addEventListener("click",function() {makecomment("");});
mAction3.addEventListener("click",function() {makecomment("");});

// たま
tAction1.addEventListener("click",function() {makecomment();});
tAction2.addEventListener("click",function() {makecomment();});
tAction3.addEventListener("click",function() {makecomment();});

