let moon = document.getElementById('moon');
let mountains = document.getElementById('mountains');
let landscape = document.getElementById('landscape');
let text = document.getElementById('text');

window.addEventListener('scroll', function () {
    let value = window.scrollY;
    moon.style.top = value * 0.5 + 'px';
    text.style.top = value * 0.5 + 'px';
    mountains.style.top = value * 0.2 + 'px';
    landscape.style.bottom = value * 0.3 + 'px';
});

window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');
    for(var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}