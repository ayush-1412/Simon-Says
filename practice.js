let mainContainer = document.querySelector(".buttons");
let gameLevel = document.querySelector(".level");

let greenButton = document.querySelector(".green_button");
let redButton = document.querySelector(".red_button");
let yellowButton = document.querySelector(".yellow_button");
let blueButton = document.querySelector(".blue_button");

let startButton = document.querySelector(".start_button");

let level = 1;
let buttonArray = [greenButton, redButton, yellowButton, blueButton];
let gameSeq = [];
let gameSeqWithClassName = [];
let userSeq = []; 

startButton.addEventListener('click', function() {
    startButton.style.boxShadow = "1px 1px 2px" ;
    gameStarted(level);
});

function gameStarted(level = 1) {
    let a = `Level = ${level}`;
    gameLevel.innerHTML = a;
    let randomNumber = Math.floor(Math.random() * 4);
    let randomColor = buttonArray[randomNumber];
    gameSeqWithClassName.push(randomColor.className);
    gameSeq.push(randomColor);

    gameSeq.forEach((color, index) => {
        setTimeout(function() {
            let defaultColor = color.style.backgroundColor;
            color.style.backgroundColor = "#ffffff"; 
            setTimeout(function() {
                color.style.backgroundColor = defaultColor; 
            }, 500);
        }, index * 1000); 
    });

    userSeq = [];
}


mainContainer.addEventListener("click", function(event) {
    let className = event.target.className;


    userSeq.push(className);

    let currentIndex = userSeq.length - 1;

    if (userSeq[currentIndex] !== gameSeqWithClassName[currentIndex]) {
        // console.log("Wrong sequence!");
        setTimeout(function(){
            let mainContainerDefaultColor = mainContainer.style.backgroundColor;
            mainContainer.style.backgroundColor = "grey";
            setTimeout(function(){
                mainContainer.style.backgroundColor = mainContainerDefaultColor;
            },500)
        },200,);
        clearInterval(3);

        userSeq = []; 
    } else if (userSeq.length === gameSeqWithClassName.length) {
        // console.log("Right sequence!");
        
        level++;
        gameStarted(level); 
    }
});

