let flappybird = document.querySelector(".flappybird");
let jump = document.querySelector(".jumpbtn");
let hide = document.querySelector(".hide");

jump.addEventListener("click", Jump());

Jump = () => {
    flappybird.style.top ="100px";
}