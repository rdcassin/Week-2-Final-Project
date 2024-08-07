var clicks = 0;

function switchTestimonial() {
    
    clicks ++;
    var element = document.getElementById("testimonial__wrapper");

    if (clicks % 2 > 0 ) {
        element.classList.remove('starting-testimonial');
        element.classList += " next-testimonial";
    }

    else {
        element.classList.remove('next-testimonial');
        element.classList += " starting-testimonial";
    }

}

function openMenu() {
    document.body.classList += " menu--open"
}

function closeMenu() {
    document.body.classList.remove('menu--open')
}