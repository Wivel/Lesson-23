function adder() {
    let
        elems = document.getElementsByTagName('a');
    for (let i = 0; i < elems.length; i++) {
        elems[i].addEventListener('mouseover',addHREF);
    }
}

function addHREF() {
    this.innerHTML = this.innerHTML + '(' +this.getAttribute('href')+')';
}