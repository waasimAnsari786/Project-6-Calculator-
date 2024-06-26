let result = document.querySelector("#result");
let btns = document.querySelectorAll(".calc-btn");

const equalBtnDisabled = () => {
    result.disabled = true;
};

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        result.disabled = false;
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
            let resultVal = result.value;
            let pattern = /^(\d+(\.\d+)?)%(\d+(\.\d+)?)$/;
            if (pattern.test(resultVal)) {
                let splitedVal = resultVal.split("%");
                let firstVal = splitedVal[0];
                let secondVal = splitedVal[1];
                result.value = eval(firstVal * secondVal / 100);
            }

            else{
                let equalsToBtn = eval(result.value);
                result.value = equalsToBtn;
            }
        });
    }
});

window.addEventListener("load" , equalBtnDisabled);
result.addEventListener("keydown" , equalBtnDisabled);