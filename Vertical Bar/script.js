var p = 0;

$('body').keydown(e => {
    if (e.code == 'ArrowDown') p--
    else if (e.code == 'ArrowUp') p++
    else if (e.code == 'KeyR') p = 0
    else if (e.code == 'KeyF') p = 100
    else if (e.code == 'KeyH') p = 50;
    if (p <= 0) p = 0
    else if (p >= 100) p = 100;
    $('.bar').css('height', `${p}%`);
    $('.mark').css('bottom', `${p - 2}%`).text(`${p}%`)
})