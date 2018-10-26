

function img_src() {
    let
        elem = document.getElementsByTagName('img');
    for (let i = 0;i<elem.length;i++){
        elem[i].addEventListener('click',alerter);
    }
    
}

function alerter() {
    alert(this.getAttribute('src'));
    this.removeEventListener('click',alerter);
}