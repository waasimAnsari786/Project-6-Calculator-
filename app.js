let result = document.querySelector("#result");
let btns = document.querySelectorAll(".calc-btn");

btns.forEach(btn => {
    btn.addEventListener("click" , () => {
        result.value = btn.value;
    });
});