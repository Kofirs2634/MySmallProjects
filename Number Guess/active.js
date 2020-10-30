// Загадывание
$('#start').click(() => {
    if ($('#up-lim').val().match(/\D/)) {
        showError('В числе должны быть только цифры!');
        return
    }
    if (!$('#up-lim').val()) {
        showError('Верхний лимит должен быть задан!');
        return
    }

    lim = parseInt($('#up-lim').val())
    num = Math.floor(Math.random() * lim) + 1;
    var chance = 1 / lim * 100;

    $('#pre-guess').css('display', 'none');
    $('#guess').css('display', 'block');
    $('#max-lim').text(lim);
    //if (chance.toString().split('.').length == 2 && chance.toString().split('.')[1].length > 3) $('#aspartam').text(chance.toFixed(3))
    //else $('#aspartam').text(chance)
    $('#aspartam').text(chance)
})

// Проверка
$('#click-me').click(() => {
    if ($('#guess-field').val().match(/\D/)) {
        showError('В числе должны быть только цифры!');
        return
    }
    if (!$('#guess-field').val()) {
        showError('Напиши свой ответ!');
        return
    }
    var guNum = parseInt($('#guess-field').val())
    if (guNum < 1 || guNum > lim) {
        showError('Число вне диапазона.');
        return
    }

    checks++;
    $('#checks').text(checks);

    var diff = Math.abs(num - guNum);
    if (diff == 0) {
        $('#result').text(`вы угадали! Это число ${num}!`);
        $('#click-me').attr('disabled', '')
    } else if (diff <= 5) $('#result').text('огонь!')
    else if (diff <= 10) $('#result').text('очень жарко')
    else if (diff <= 50) $('#result').text('жарко')
    else if (diff <= 100) $('#result').text('тепло-тепло')
    else if (diff <= 250) $('#result').text('тепло')
    else if (diff <= 500) $('#result').text('ни тепло, ни холодно')
    else if (diff <= 1000) $('#result').text('холодно')
    else if (diff <= 5000) $('#result').text('очень холодно')
    else if (diff <= 10000) $('#result').text('крайне холодно')
    else if (diff <= 50000) $('#result').text('абсолютный ноль')
    else $('#result').text('вы где-то не в нашей вселенной')
})