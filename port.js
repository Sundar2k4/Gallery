var i = 0;
var images = [];
var images2 = [];
var time = 3000;

// Array of images for slides
images[0] = 'new1.jpg';
images[1] = 'new2.jpg';
images[2] = 'new3.jpg';
images2[0] = 'im1.jpg';
images2[1] = 'im2.jpg';
images2[2] = 'im3.jpg';

// Function to change images
function changeimg() {
    // Update image sources for slideshow
    document.slide.src = images[i];
    document.slide2.src = images2[i];

    // Increment index or reset if at end
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout(changeimg, time); // Call the function again after the specified time
}

// Initialize slideshow on window load
window.onload = changeimg;

