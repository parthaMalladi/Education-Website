const imageSources = [
    "Images/Algebra.jpg",
    "Images/Geometry.jpg",
    "Images/Physics.jpg"];

const imageCaptions = [
    "Take Our Algebra Courses",
    "Take Our Geometry Courses",
    "Take Our Physics Courses"];

const imageLinks = [
    "algebra.htm",
    "geometry.htm",
    "physics.htm"];

var slide = 0;

var ongoing_transition = false;

function plusSlides(n) {
    showSlides(slide + n);
}

function currentSlide() {
    showSlides(slide);
}

// voodoo magic
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function changeImage(i) {
    // get the elements to change
    var pic = document.getElementById("slide");
    var numbers = document.getElementById("numbertext");
    var caption = document.getElementById("imageCaption");
    var link = document.getElementById("imageLink");

    // make the elements fade out and wait for the animation to end
    pic.className = "fadeout";
    numbers.className = "fadeout";
    caption.className = "fadeout";
    await sleep(750);

    // change the elements
    pic.src = imageSources[i];
    numbers.innerHTML = (i + 1) + " / " + imageSources.length;
    caption.innerHTML = imageCaptions[i];
    link.href = imageLinks[i];

    // make the elements fade back in and wait for the animation to end
    pic.className = "fadein";
    numbers.className = "fadein";
    caption.className = "fadein";
    await sleep(750);

    // reset the elements
    pic.classname = "";
    numbers.className = "";
    caption.className = "";

    ongoing_transition = false;
}

function showSlides(n) {
    
    if (ongoing_transition) return;

    ongoing_transition = true;
    console.log(ongoing_transition);
    slide = n;
    if (n > imageSources.length - 1) slide = 0;
    if (n < 0) slide = imageSources.length - 1;

    changeImage(slide);
}