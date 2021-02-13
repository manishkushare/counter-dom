console.log("test");


let increaseCount = document.querySelector(".increase-count");
let decreaseCount = document.querySelector(".decrease-count");
let displayCount = document.querySelector(".display-count");
let count = 0;
displayCount.innerText = count;
let reset = document.querySelector(".reset");

function increaseCounter(event) {
    ++count;
    displayCount.innerText = count;

    console.log(count);
}
function decreaseCounter(event) {
    if(count > 0){
        --count;

    }
    else {

        count = 0
    }
    displayCount.innerText = count;
}

function resetCounter(event) {
    count = 0;
    displayCount.innerText = count;
}

increaseCount.addEventListener("click",increaseCounter);
decreaseCount.addEventListener("click", decreaseCounter);
reset.addEventListener("click",resetCounter);

