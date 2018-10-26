
function check() {
    let
        str1            = String(this.value),
        corectSym       = Number(this.getAttribute('data-length'));
    if (str1.length == corectSym) {
        this.style.borderColor = 'green';
    }
    else {
        this.style.borderColor = 'red';
    }
}

function adderEvent() {
    let
        elem = document.getElementsByTagName('input');
    for (let i = 0; i < elem.length; i++) {
        elem[i].addEventListener('blur', check);
    }
}