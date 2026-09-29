function imgSlider(anything) {
    document.querySelector('.starbucks').src = anything;
}

function changeCircleColor(color) {
    document.querySelector('.circle').style.background = color;
}


let open = document.querySelector('#open');
let close = document.querySelector('#close');
let navItems = document.querySelector('#navItems');


open.onclick = function() {
    navItems.classList.add('active');
}

close.onclick = function() {
    navItems.classList.remove('active');
}