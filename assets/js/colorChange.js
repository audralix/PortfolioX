function scrollValue() {
    var navbar = document.getElementById('navbar');
    var colorText= document.getElementById('colorText')
    var scroll = window.scrollY;
    if (scroll < 200) {
        navbar.classList.remove('BgColour');
        colorText.classList.remove('colorText');

    } else {
        navbar.classList.add('BgColour');
        colorText.classList.remove('colorText');

    }
}

window.addEventListener('scroll', scrollValue);