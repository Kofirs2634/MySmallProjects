var gx = Math.round(Math.random() * 100),
    gy = Math.round(Math.random() * 100),
    checks = 0;

$('#chance').text(1 / (100 * 100));
console.log(`(${gx}; ${gy})`);

$('#click-me').click(() => {
    checks++;
    var x = $('#x').val(),
        y = $('#y').val();
    $('#checks').text(checks)
    if (x == gx && y == gy) {
        $('#click-me').attr('disabled', 'disabled');
        $('#dist').text('0.000, победа!')
    } else {
        var dist = Math.sqrt(Math.pow(Math.abs(gx - x), 2) + Math.pow(Math.abs(gy - y), 2)).toFixed(3);
        $('#dist').text(dist)
    }
})