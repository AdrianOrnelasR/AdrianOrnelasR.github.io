function createParagraph() {
    const para = document.createElement("p");
    const messages = [
      "What did I just say!",
      "You never listen Linda!",
      "Minecraft makes you jump shorter!",
      "Whats the deal with ....!",
    ];
    const randomIndex = Math.floor(Math.random() * messages.length);
    para.textContent = messages[randomIndex];
    document.body.appendChild(para);
  }
  
  const buttons = document.querySelectorAll("button");
  
  for (const button of buttons) {
    button.addEventListener("click", createParagraph);
  }


var img = document.getElementById("clickable_img");
var toggle_change = true; 
  
img.addEventListener("click", function() {
    if (toggle_change) {
        img.src = "/ATLS2200/CSS-Midterm/img/Ravels.jpeg";
    } else {
        img.src = "/ATLS2200/CSS-Midterm/img/Beethoven_Violin_Concerto.jpeg";
    }
    toggle_change = !toggle_change; 
});

  