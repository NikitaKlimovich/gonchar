const form = document.forms["formCalc"];
const firstNumber = form.elements["firstNumber"];
const secondNumber = form.elements["secondNumber"];
const operator = form.elements["operator"];
const calculateBtn = form.elements["calculateBtn"];
const resultText = form.elements["result"];

calculateBtn.addEventListener("click", calculate);

function calculate() {
    let sign = operator.value.trim();
    let firstNum = parseFloat(firstNumber.value.trim());
    let secondNum = parseFloat(secondNumber.value.trim());
    let result;
    if (sign === "++" || sign === "--") {
        if (!isNaN(firstNum)) {
            result = sign === "++" ? ++firstNum : --firstNum;
        } else {
            result = "Введите корректное первое число";
        }
    } else if (sign === "+" || sign === "-" || sign === "*" || sign === "/") {
        if (!isNaN(firstNum)) {
            switch (sign) {
                case "+":
                    result = firstNum + secondNum;
                    break;
                case "-":
                    result = firstNum - secondNum;
                    break;
                case "*":
                    result = firstNum * secondNum;
                    break;
                case "/":
                    result = (secondNum != 0) ? firstNum / secondNum : "Нельзя делить на ноль";
                    break;
            }
        } else {
            result = "Введите корректные числа";
        }
    } else {
        result = "Неверный оператор";
    }
    resultText.value = (result == undefined) ? "Невозможно посчитать результат" : result;
}