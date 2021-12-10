function task_3_1_1() {
    // Вывод 2-ух вариантов сообщений с помощью 3-ёх alert()
    let response = confirm("Do you accept terms of service?");
    response ? alert("Account has been created successfully.") :
               alert("You must accept terms of service to register your account.")
}

function task_3_1_2(argument) {
    // Измените пример из лекции так, чтобы на экран выводились цифры от 1 до 5-ти.
    var x = 0
    do {
        ++x;
        alert(x);
    }
    while (x < 5);
}

function task_3_1_3(argument) {
    var x = 3;
    do {
        nameSurname = prompt("Введите имя и фамилию", "Имя Фамилия");
        if (x == 0) { 
            alert("Попыток не осталось."); 
            break;
        }
        alert("Введены неверные данные. Осталось попыток:" + --x)
    }
    while (nameSurname == "Имя Фамилия" || nameSurname == "" || nameSurname == null);
    alert(sometext);
}

function task_3_1_4(argument) {
    var x = 0
    while (x < 5) {
        ++x;
        alert(x);
    }
}

function task_3_1_5(argument) {
    var myarray = new Array();
    for (i = 10; i != 0; i--) {
        myarray[10-i] = i - 1;
    }
    alert(myarray);
}

function task_3_1_6(argument) {
    var myarray = new Array("", "", "", "");
    var y = 0, extent = ".jpeg";  //вставьте в extent расширение для формата JPEG
    for (x in myarray) {
        y++;
        myarray[x] = "\n<a href=\"./images" + y + ".jpeg\"" + ">рис." + y + "</a>";
    }
    alert("Ссылки на мои картинки gif-формата:" + myarray);
}

function task_3_1_7(argument) {
    var x = 0;
    while (x < 10) {
        x++;
        if (x % 2 != 0) {
            continue;
        }
        alert(x);
    }
}

function task_3_1_8(argument) {
    alert("For")
    for (x=0; x<10; x++) {
        if (x % 2 != 0) {continue}
        alert(x);
    }
}

function task_3_1_9(argument) {
    /* Воспользуйтесь оператором switch для написания сценария,
    в котором будут выполняться различные операторы в зависимости от того,
    какая буква введена в окне запроса: a, b, c, d или e. Не забудьте указать оператор,
    используемый по умолчанию, для непредвиденных значений. */
    var yourchoice;
    yourchoice = prompt("Загадайте латинскую букву от a до e")
    switch (yourchoice) {
        case "a":
            alert("Вы ввели букву a");
            break;
        case "b":
            alert("Вы ввели букву b");
            break;
        case "c":
            alert("Вы ввели букву c");
            break;
        case "d":
            alert("Вы ввели букву d");
            break;
        case "e":
            alert("Вы ввели букву e");
            break;
        default: //эта метка и соответствующие ей операторы предусмотрены для выполнения по умолчанию
            alert("Вы ввели букву не в том регистре или не в том диапазоне!");
            break;
    }
}

function task_3_1_10(argument) {
    /*С использованием любого оператора цикла измените пример 3.5.10 из лекции так,
    чтобы форма с требованием ввода пароля выводилась три раза и лишь после этого
    загружалась бы дополнительная страница. После выполнения этого задания,
    вы можете защитить свои страницы, если это, на ваш взгляд необходимо.
    И не забудьте изменить пароль для доступа к вашим файлам на файловом сервере,
    если знаете об опасности.*/
    var x = 3;
    do {
        --x;
        if (x == 0) { 
            alert("No tries left.")
            break;
        }
        pass = prompt("Enter password");
        if (pass != '123') {
            alert("Incorrect password, tries left: " + (x - 1))
        }
        else {
            alert("Correct password. Access granted.")
        }
    }
    while (pass != '123');
}

function task_3_2_1(argument) {
    alert("Are you shure you don't wanna click it?")
}

function task_3_2_2(argument) {
    alert("Goodbye")
}

function task_3_2_3(argument) {
    var from = prompt("convert from (c/f/r): ")
    var to = prompt("convert tot (c/f/r): ")
    var value = prompt("value: ")

    function convert() {
        if (from == 'c'){
            if (to == 'c'){return value}
            if (to == 'f'){return 1.8*value + 32}
            if (to == 'r'){return value*0.8}
        }

        if (from == 'f'){
            if (to == 'c'){return (value-32)/1.8}
            if (to == 'f'){return value}
            if (to == 'r'){return value/9*4}
        }

        if (from == 'r'){
            if (to == 'c'){return value/4*5}
            if (to == 'f'){return value/4*9}
            if (to == 'r'){return value}
        }
    }

    alert(value+from+'='+convert(value)+to)
}

function task_3_3_1(argument) {
    rndNum = Math.floor(Math.random() * 101);
    alert("Pадиус = " + rndNum + '\n'+ "Площадь круга = " + Math.PI * (rndNum * rndNum));
}

function task_3_3_2(argument) {
    dateVar = new Date();
    day_per_ms = 1000 * 60 * 60 * 24;
    week_per_ms = 7 * day_per_ms;
    today_ms = dateVar.getTime();
    today_ms += week_per_ms;
    dateVar.setTime(today_ms);

    // Метод getYear() не возвращает полный год ("проблема 2000 года"),  
    // потому он больше не используется и был заменён методом getFullYear()

    alert("Дата через " + week_per_ms / day_per_ms +
        " дней от текущей даты : " + dateVar.getDate() + '/' + dateVar.getMonth() + '/' + dateVar.getFullYear());
}

function task_3_3_3(form) {
      var inc_m1 = 1.00 * form.elements[0].value;
      var inc_m2 = 1.00 * form.elements[1].value;
      var inc_m3 = 1.00 * form.elements[2].value;
      var inc_m4 = 1.00 * form.elements[3].value;
      var inc_m5 = 1.00 * form.elements[4].value;
      var inc_m6 = 1.00 * form.elements[5].value;
      var inc_mean = (inc_m1 + inc_m2 + inc_m3 + inc_m4 + inc_m5 + inc_m6) / 6;
      form.result.value = inc_mean;
}

async function animate_moon(argument) {
    console.log("animating")

    function move_moon(x, y) {
        moon.style.left = x+'px'
        moon.style.top = y+'px'
        console.log('X PIXELS '+moon.style.left, 'Y PIXELS '+moon.style.top)
    }

    for (i=0; i<=360; i++){
        console.log(i)
        let radians = i*Math.PI/180
        x = Math.sin(radians)*100
        y = Math.cos(radians)*100
        move_moon(x, y)
        await new Promise(r => setTimeout(r, 20));
    }

}

