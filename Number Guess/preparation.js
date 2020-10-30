var num, closeErr, lim, checks = 0;

function showError(t) {
    $('#errs').text(t).css('display', 'block');
    if (closeErr) clearTimeout(closeErr);
    closeErr = setTimeout(() => { $('#errs').css('display', 'none') }, 5000);
}