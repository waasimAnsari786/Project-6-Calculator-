let result = document.querySelector("#result");
let btns = document.querySelectorAll(".calc-btn");

btns.forEach(btn => {
    btn.addEventListener("click" , () => {
        result.value += btn.value;
    });

    if (btn.id === `ac`) {
        btn.addEventListener("click" , () => {
            result.value = "";
        });
    }

    else if (btn.id === `del`) {
        btn.addEventListener("click" , () => {
            let currenttext = result.value;
            result.value = currenttext.substring(0 , currenttext.length-1);
        });
    }

    else if (btn.id === `equal`) {
        btn.addEventListener("click" , () => {
            let equalsToBtn = eval(result.value);
            result.value = equalsToBtn;
        });
    }
});