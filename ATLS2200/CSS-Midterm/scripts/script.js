function showPopup(data) {
    const popup = document.getElementById('popup');
    const popupContent = document.getElementById('popup-content');
    popup.style.display = 'block';
    const popupHTML = `
    <div class="popup-content" style="background-color: ${data.backgroundColor}">
        <img src="${data.imageSrc}" alt="${data.title}">
        <h2>${data.title}</h2>
        <p>${data.text}</p>
    `;
    popupContent.innerHTML = popupHTML;
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}
