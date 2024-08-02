var clicks = 0;

function nextTestimonial() {
    clicks ++;
    var element = document.getElementById("testimonial__wrapper");
    if (clicks % 2 > 0) {
        element.classList.remove('starting-testimonial');
        element.classList += " next-testimonial";

    }

    else {
        element.classList.remove('next-testimonial');
        element.classList += " starting-testimonial";
    }
}