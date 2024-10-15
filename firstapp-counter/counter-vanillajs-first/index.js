let count = 0;

const addBtn = document.getElementById("add");
const subBtn = document.getElementById("subtract");

const countHeader = document.getElementById("count");

addBtn.addEventListener("click", () => {
    if(count < 10){
        count++;
        countHeader.innerText = count;
    }
});

subBtn.addEventListener("click", () => {
    if(count > 0){
        count--;
        countHeader.innerText = count;
    }
});


