let sliderElement = document.getElementById('#sections-wrapper'),
    sliderSlides = sliderElement.querySelectorAll('.section').length,
    currentSliderScrollPos = 0,
    slideWidth = 200,
    slideMaxWidth = sliderSlides * slideWidth;

/**
 * Scroll to previous slide within the slider
 */
function sliderPrev() {
    // Calculate the new scroll position for the slider
    var newSliderScrollPos = currentSliderScrollPos - slideWidth;
    // If the new calculated scroll position exceedes the sliders maximum range do nothing
    if (newSliderScrollPos < 0) {
        return;
    }
    // Update the current slider scroll position
    currentSliderScrollPos = newSliderScrollPos;
    // Scroll to the previous slide
    sliderElement.scrollTo(0, newSliderScrollPos);
}

/**
 * Scroll to next slide within the slider
 */
function sliderNext() {
    // Calculate the new scroll position for the slider
    var newSliderScrollPos = currentSliderScrollPos + slideWidth;
    // If the new calculated scroll position exceedes the sliders maximum range do nothing
    if (newSliderScrollPos >= slideMaxWidth) {
        return;
    }
    // Update the current slider scroll position
    currentSliderScrollPos = newSliderScrollPos;
    // Scroll to the next slide
    sliderElement.scrollTo(0, newSliderScrollPos);
}