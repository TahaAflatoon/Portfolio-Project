/*JQuery*/
$.noConflict()
jQuery(document).ready(function($) {
    //Smooth scroll
    $('.links a').on('click', function(event) {
        if (this.hash !== '') {
            event.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 50
                },800
            );
        }
});
})

/*JavaScript*/
//Sticky menu background
window.addEventListener('scroll', function() {
    if (window.scrollY > 40) {
        document.querySelector('.header-mobile').style.opacity = 0.9;
    } else {
        document.querySelector('.header-mobile').style.opacity = 1;
    }
});