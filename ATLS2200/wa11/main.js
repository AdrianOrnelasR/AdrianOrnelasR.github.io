const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const arr_img = ['images/pic1.jpg', 'images/pic2.jpg', 'images/pic3.jpg', '/images/pic4.jpg', '/images/pic5.jpg'];

/* Declaring the alternative text for each image file */
const alt_text = ['eye', 'marble wave', 'flowers', 'old painting', 'butterfly'];

/* Looping through images */
for(let i = 0; i < arr_img.size(); i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', arr_img[i]);
    newImage.setAttribute('alt', alt_text[i]);
    thumbBar.appendChild(newImage);
}

/* Wiring up the Darken/Lighten button */
btn.setAttribute("class", "dark");
btn.textContent = "Darken";
overlay.style.backgroundColor = "rgba(0,0,0,0)";
