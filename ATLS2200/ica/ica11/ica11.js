console.log("Making sure this is linked correctly.");

const x = 2;
const y = 2;

if(x === y)
{
    console.log("X and Y are equal!");
}
else
{
    console.log("X and Y are not equal!");
}   

// edit the canvas 

// event listener 
const btn = document.querySelector("button");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// document.addEventListener("DOMContextLoaded", () => {
//     canvas.width = document.documentElement.clientWidth;
//     canvas.height = document.documentElement.clientHeight;
// });
document.addEventListener("DOMContentLoaded", () => {
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
});

function random(number){
    return Math.floor(Math.random () * number)
}

function random2(number){
    return (Math.random () * number)
}

function draw()
{
    // console.log("test, draw()")
    // makes the circles disapear each time 
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for(let i = 0; i < 200; i++){
        ctx.beginPath();

        if(i <= 49){
            let red = random(255);
            let green = random(0);
            let blue = random(0);
            let alpha = random2(1);
            // ctx.fillStyle = "rgba(255, 0, 0, 0.5)";
            let color = "rgba("+red+","+green+","+blue+","+alpha+")";
            ctx.fillStyle = color;
        }else if(i <= 99){
            let red = random(0);
            let green = random(255);
            let blue = random(0);
            let alpha = random2(1);
            let color = "rgba("+red+","+green+","+blue+","+alpha+")";
            ctx.fillStyle = color;
        }else if(i <= 149){
            let red = random(0);
            let green = random(0);
            let blue = random(0);
            let alpha = random2(1);
            let color = "rgba("+red+","+green+","+blue+","+alpha+")";
            ctx.fillStyle = color;
        }else{
            let red = random(255);
            let green = random(255);
            let blue = random(255);
            let alpha = random2(1);
            let color = "rgba("+red+","+green+","+blue+","+alpha+")";
            ctx.fillStyle = color;
        }
        // let color = "rgba("+red+","+green+","+blue+",0.5)";
        // ctx.fillStyle = color;
        ctx.arc(random(canvas.width), random(canvas.height), random(100), 0, 2 * Math.PI);
        ctx.fill();
    }
}

//                   action,  function
btn.addEventListener("click", draw);

