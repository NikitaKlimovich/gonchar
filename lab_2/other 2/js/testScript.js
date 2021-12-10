const screamName = "radioScream";
const screamAnswer = 2;
const noseName = "radioNose";
const noseAnswer = 3;
const eyelashName = "radioEyelash";
const eyelashAnswer = 2;
const penguinsName = "radioPenguins";
const penguinsAnswer = 2;
const mohawkName = "radioMohawk";
const mohawkAnswer = 3;
const onionName = "radioOnion";
const onionAnswer = 0;
const distanceName = "radioDistance";
const distanceAnswer = 1;
const analogsName = "checkAnalogs";
const analogsAnswerOne = 0;
const analogsAnswerTwo = 2;
const exceptionsName = "checkExceptions";
const exceptionAnswerOne = 0;
const exceptionAnswerTwo = 3;
const authorName = "authorAnswer";
const authorAnswer = "Глендэй";

const myForm = document.forms["form1"];
const submitBtn = document.getElementById('submitBtn');
const superBtn = document.getElementById('superQuestion');
const tipBtn = document.getElementById('tipBtn');
const tipBox = document.getElementById('testTip');
const superGameBtn = document.getElementById('superGameBtn');

submitBtn.addEventListener("click", validateForm);
superBtn.addEventListener("click", askSuperQuestions);
tipBtn.addEventListener("click", showTip);
superGameBtn.addEventListener("click", playSuperGame);

function validateForm() {
    let sum = 0;
    const numberOfQuestions = 10;
    const taskAssesment = 100 / 10;
    let butns = myForm.elements[screamName];
    for (let i = 0; i < butns.length; i++) {
        if (butns[i].checked && i == screamAnswer) {
            sum += taskAssesment;
        } else {
            sum -= taskAssesment;
        }
    }
    butns = myForm.elements[noseName];
    for (let i = 0; i < butns.length; i++) {
        if (butns[i].checked && i == noseAnswer) {
            sum += taskAssesment;
        } else {
            sum -= taskAssesment;
        }
    }
    butns = myForm.elements[eyelashName];
    for (let i = 0; i < butns.length; i++) {
        if (butns[i].checked && i == eyelashAnswer) {
            sum += taskAssesment;
        } else {
            sum -= taskAssesment;
        }
    }
    butns = myForm.elements[penguinsName];
    for (let i = 0; i < butns.length; i++) {
        if (butns[i].checked && i == penguinsAnswer) {
            sum += taskAssesment;
        } else {
            sum -= taskAssesment;
        }
    }
    butns = myForm.elements[mohawkName];
    for (let i = 0; i < butns.length; i++) {
        if (butns[i].checked && i == mohawkAnswer) {
            sum += taskAssesment;
        } else {
            sum -= taskAssesment;
        }
    }
    butns = myForm.elements[onionName];
    for (let i = 0; i < butns.length; i++) {
        if (butns[i].checked && i == onionAnswer) {
            sum += taskAssesment;
        } else {
            sum -= taskAssesment;
        }
    }
    butns = myForm.elements[distanceName];
    for (let i = 0; i < butns.length; i++) {
        if (butns[i].checked && i == distanceAnswer) {
            sum += taskAssesment;
        } else {
            sum -= taskAssesment;
        }
    }
    butns = myForm.elements[analogsName];
    let checked = Array();
    for (let i = 0; i < butns.length; i++) {
        if(butns[i].checked) {
            checked += i
        }
    }
    console.log(checked);
    console.log(checked === [analogsAnswerOne, analogsAnswerTwo]);
    if (checked == [analogsAnswerOne, analogsAnswerTwo]) {
        sum += taskAssesment;
    } else if (checked == analogsAnswerTwo || checked == analogsAnswerOne) {
        sum += taskAssesment / 2;
    } else {
        sum -= taskAssesment;
    }
    butns = myForm.elements[exceptionsName];
    for (let i = 0; i < butns.length; i++) {
        if (butns[i].checked && (i == exceptionAnswerOne || i == exceptionAnswerTwo)) {
            sum += taskAssesment / 2;
        } else {
            sum -= taskAssesment / 2;
        }
    }
    let answer = myForm.elements[authorName];
    if (answer.value.indexOf(authorAnswer) != -1) {
        sum += taskAssesment;
    } else {
        sum -= taskAssesment;
    }
    if (sum < 0)  {
        sum = 0;
    }
    alert('Ваш результат - ' + Math.round(sum) + '%');
}

function askSuperQuestions() {
    let answer = prompt('В каком году вышло первое издение?');
    if (answer == 1955) {
        alert('Вы ответили верно! (1955) Супер!');
    } else {
        alert('К сожалению, вы ответили не верно:( Попробуйте еще раз!');
    }
}

function showTip() {
    let isShow = confirm("Вы уверены, что хотите увидеть подсказку?");
    if (isShow) {
        tipBox.hidden = !tipBox.hidden;
        if (tipBox.hidden) {
            tipBtn.innerText = "Показать подсказку"
        } else {
            tipBtn.innerText = "Скрыть подсказку"
        }
    }
}

function playSuperGame() {
    let question = "What is your name?";
    let rightAnswer = "Julea";
    let playerAnswer;
    do {
        console.log(playerAnswer);
        playerAnswer = prompt(question);
        console.log(playerAnswer !== rightAnswer);
        console.log(playerAnswer !== null);
        console.log((playerAnswer !== rightAnswer && playerAnswer !== null));
    } while (playerAnswer !== rightAnswer && playerAnswer !== null)
    alert( (playerAnswer === rightAnswer) ? "You are winner!" : "You're cool, but not a winner ¯\_(ツ)_/¯");
}