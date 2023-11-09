const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
// const arr_img = ["images/pic1.jpg", "images/pic2.jpg", "images/pic3.jpg", "images/pic4.jpg", "images/pic5.jpg"];
const arr_img = ["images/img1.JPG", "images/img2.JPG", "images/img3.JPG", "images/img4.JPG", "images/img5.JPG"];

/* Declaring the alternative text for each image file */
const alt_text = {
    "img1": "eye", 
    "img2": "marble wave",
    "img3": "flowers", 
    "img4": "old painting", 
    "img5": "butterfly"
};

/* Looping through images */

for (let i = 0; i < arr_img.length; i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', arr_img[i]);
    let str = "img"+(i+1);
    newImage.setAttribute('alt', alt_text[str]);
    thumbBar.appendChild(newImage);
    
    function img_change(){
        displayedImage.setAttribute('src', arr_img[i]);
        let str = "img"+(i+1);
        displayedImage.setAttribute('alt', alt_text[str]);
    }
    newImage.addEventListener("click", img_change);
}



/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", ()=> {
    if(btn.getAttribute("class") == "dark")
    {
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5";
    }
    else if(btn.getAttribute("class") == "light")
    {
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
  }
);