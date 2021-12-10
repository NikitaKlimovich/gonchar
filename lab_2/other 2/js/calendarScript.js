const calendarLangBtn = document.getElementById("calendarLang");
const calendarText = document.getElementById("calendarText");
const escapeBtn = document.getElementById("escapeBtn");
const escapeText = document.getElementById("escapeText");

const august = {
    "ru": "Август",
    "en": "August",
    "by": "Жнівень",
};
const september = {
    "ru": "Сентябрь",
    "en": "September",
    "by": "Верасень",
};
const october = {
    "ru": "Октябрь",
    "en": "October",
    "by": "Кастрычнік",
};
const november = {
    "ru": "Ноябрь",
    "en": "November",
    "by": "Лістапад",
};
const december = {
    "ru": "Декабрь",
    "en": "December",
    "by": "Снежань",
};
const january = {
    "ru": "Январь",
    "en": "January",
    "by": "Студзень",
};
const february = {
    "ru": "Февраль",
    "en": "February",
    "by": "Люты",
};
const march = {
    "ru": "Март",
    "en": "March",
    "by": "Сакавік",
};
const april = {
    "ru": "Апрель",
    "en": "April",
    "by": "Красавік",
};
const may = {
    "ru": "Май",
    "en": "May",
    "by": "Май",
};
const june = {
    "ru": "Июнь",
    "en": "June",
    "by": "Чэрвень",
};
const jule = {
    "ru": "Июль",
    "en": "Jule",
    "by": "Ліпень",
};

calendarLangBtn.addEventListener("click", chooseLang);
escapeBtn.addEventListener("click", showEscapeCharacters);

function chooseLang() {
    let newLang = prompt("Введите язык (ru/en/by)", "ru");
    if (newLang == "ru" || newLang == "en" || newLang == "by") {
        setMonthsString(newLang);
    } else {
        calendarText.innerText = "Такого языка нет :/";
    }
}

function setMonthsString(lang) {
    let months = [january, february, march, april, may, june, jule, august, september, october, november, december];
    let monthsString = "";
    let index = 0;
    while(index < months.length) {
        const element = months[index];
        monthsString += ("\t" + "\"" + element[lang] + "\"");
        monthsString += "\n";
        index++;
    }
    calendarText.innerText = monthsString;
}

function showEscapeCharacters() {
    let escapeString = "Отступы добавлены с помощью escape-символа n.\n";
    escapeString += "Продемонстрируем работу табуляции t\tвиден отступ.\n";
    escapeString += "Также добавим покажем работу с символами одинарная кавычка - \', двойная - \", обратный слэш - \\.\n";
    escapeString += "Здесь и далее переход на следующую строку будет реализован с помощью символа возврата каретки.\r";
    escapeString += "Покажем работу символа возврата на одну позицию b - backup\b\b out.\r";
    escapeText.innerText = escapeString;
}