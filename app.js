let result = document.querySelector("#result");
result.value = 0;
let btns = document.querySelectorAll(".calc-btn");

btns.forEach(btn => {
    btn.addEventListener("click" , () => {
        result.value = btn.value;
    });
});