var gx = Math.round(Math.random() * 100),
    gy = Math.round(Math.random() * 100),
    gz = Math.round(Math.random() * 100),
    checks = 0;

$('#chance').text(1 / Math.pow(100, 3));
console.log(`(${gx}; ${gy}; ${gz})`);

$('#click-me').click(() => {
    checks++;
    var x = $('#x').val(),
        y = $('#y').val(),
        z = $('#z').val();
    $('#checks').text(checks)
    if (x == gx && y == gy && z == gz) {
        $('#click-me').attr('disabled', 'disabled');
        $('#dist').text('0.000, победа!')
    } else {
        var dist = Math.sqrt(Math.pow(Math.abs(gx - x), 2) + Math.pow(Math.abs(gy - y), 2) + Math.pow(Math.abs(gz - z), 2)).toFixed(3);
        $('#dist').text(dist)
    }
})