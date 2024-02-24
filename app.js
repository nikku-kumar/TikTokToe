let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGameButton=document.querySelector("#new-btn");
let msgContainer = document.querySelector(".winning-container");
let msg = document.querySelector("#msg");

let turn0 = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () =>{
    let turn0 = true; 
    enableBoxes();
    msgContainer.classList.add("hide");

};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "O";
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();
    });

});

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};


const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const showWinner=(winner) =>{
     msg.innerText=`Congratulation  ,winner is  ${winner}`;
     msgContainer.classList.remove("hide");
     disableBoxes();
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let post1Val = boxes[pattern[0]].innerText;
        let post2Val = boxes[pattern[1]].innerText;
        let post3Val = boxes[pattern[2]].innerText;

        if(post1Val != ""  && post2Val != "" && post3Val != ""){
            if(post1Val === post2Val  && post2Val === post3Val ){
                showWinner(post1Val);
            }
        }
    }
};
newGameButton.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);

