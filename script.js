

function addEvent() {
    let
        elem       = document.getElementsByTagName('div');
    for (let i = 0; i < elem.length; i++) {
        elem[i].addEventListener('click', changeColor_1);
    }
}

function changeColor_1() {
    this.style.backgroundColor = 'red';
    this.removeEventListener('click', changeColor_1);
    this.addEventListener('click', returnColor_1);
}
function returnColor_1() {
    this.style.backgroundColor = 'blue';
    this.removeEventListener('click', returnColor_1);
    this.addEventListener('click', changeColor_2);
}

function changeColor_2() {
    this.style.backgroundColor = 'green';
    this.removeEventListener('click', changeColor_2);
    this.addEventListener('click', returnColor_2);
}
function returnColor_2() {
    this.style.backgroundColor = 'blue';
    this.removeEventListener('click', returnColor_2);
    this.addEventListener('click', changeColor_1);
}
