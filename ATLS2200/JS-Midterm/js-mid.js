// for the scope mouse 
document.addEventListener("DOMContentLoaded", function () {
    // grab the scoped class and the header which is where the number
    const follow_mouse_element = document.querySelector('.scope-mouse');
    const heading_element = document.querySelector('header');

    // for the left and right sign 
    const left_sign = document.querySelector('.left-sign');
    const right_sign = document.querySelector('.right-sign');

    // this is for the number block to have access to replace the number
    const number_blocks = document.querySelectorAll('.number-block');

    // for the pop up 
    const overlay = document.getElementById("overlay");
    const modal = document.getElementById("myModal");
    const closeBtn = document.querySelector(".close");

    // make the pop up when page loaded
    overlay.style.display = "block";
    modal.style.display = "block";

    // close the modal when you hit the close button
    closeBtn.addEventListener("click", function(){
        overlay.style.display = "none";
        modal.style.display = "none";
    });

    // close the modal after 5 seconds if the close button wasnt hit
    setTimeout(function (){
        overlay.style.display = "none";
        modal.style.display = "none";
    }, 7000);

    // to go through numbers 0-9
    let count = 0;
    let number_hit = 1;
    function left_sign_counter() {
        count = (count + 1) % 10;
        left_sign.innerHTML = count;
        number_hit = count;
    }
    // determins how fast the numbers go through 
    setInterval(left_sign_counter, 200);

    // for the right sign
    let right_sign_X = true;
    function right_sign_change() {
        right_sign_X = !right_sign_X;
        right_sign.innerHTML = right_sign_X ? 'X' : 'D';
        right_sign.classList.toggle('blue-sign', !right_sign_X);
    }
    // determins how fast the X for remove last element and D for duplicate last element
    setInterval(right_sign_change, 200);
 
    document.addEventListener('mousemove', function (event) {
        // get x and y as an event listener
        const x = event.clientX;
        const y = event.clientY;
        // update the postion using the x and y listeners 
        follow_mouse_element.style.display = 'block';
        follow_mouse_element.style.left = `${x}px`;
        follow_mouse_element.style.top = `${y}px`;
        // if the mouse is over the header element
        const heading_hide = heading_element.getBoundingClientRect();
        // if the x or y is in any of the header element boundaries, than set remove the scope 
        if(x >= heading_hide.left && x <= heading_hide.right && y>= heading_hide.top && y <= heading_hide.bottom){
            follow_mouse_element.style.display = 'none';
            // bring back mouse 
            document.body.style.cursor = 'auto';
        }else if(overlay.style.display === "block" && modal.style.display === "block"){
            follow_mouse_element.style.display = 'none';
        }
        else{
            // hide the defult mouse 
            document.body.style.cursor = 'none';
        }

    });
    // if the mouse is every off the screen 
    document.addEventListener('mouseleave', function() {
        follow_mouse_element.style.display = 'none';
    });
    // function to deal with clicking on the sign to update blocks
    document.addEventListener('click', function (event){
        const x = event.clientX;
        const y = event.clientY;
        // get left and right sign boundaries
        const left_sign_click = left_sign.getBoundingClientRect();
        const right_sign_click = right_sign.getBoundingClientRect();
        // check if the scope is over the left sign 
        if (x >= left_sign_click.left && x <= left_sign_click.right && y>= left_sign_click.top && y <= left_sign_click.bottom){
            update_number_block(number_hit);
        }
        // check if the scope is over the right sign 
        if (x >= right_sign_click.left && x <= right_sign_click.right && y>= right_sign_click.top && y <= right_sign_click.bottom){
            // if red is hit: delete the last entry
            if(right_sign_X) {
                delete_last_entry();
            }
            // if blue is hit: duplicate the last entry 
            else{
                duplicate_last_entry();
            }
        }
    });
    // function to deal with the placing the number hit into the number block 
    function update_number_block(entry){
        // find the last filled number block 
        for(let i = 0; i < number_blocks.length; i++){
            // // check to make sure its a number spot and not a '-'
            if(number_blocks[i].innerHTML === '0' && number_blocks[i].innerHTML !== '-'){
                number_blocks[i].innerHTML = entry;
                break;
            }
        }
    }
    // function to delete the last entry in the number block
    function delete_last_entry(){
        // find the last filled number block 
        for(let i = number_blocks.length - 1; i >= 0; i--){
            // check to make sure the number spot is not a '-' or a '0'
            if (number_blocks[i].innerHTML !== '0' && number_blocks[i].innerHTML !== '-') {
                number_blocks[i].innerHTML = '0';
                break;
            }
        }
    }
    // function to duplicate the last entry in the number block 
    function duplicate_last_entry(){
        // get the last filled block 
        let last_entry = '0';
        for(let i = number_blocks.length - 1; i >= 0; i--){
            if(number_blocks[i].innerHTML !== '0' && number_blocks[i].innerHTML !== '-'){
                last_entry = number_blocks[i].innerHTML;
                break;
            }
        }
        // now find the first empty slot and put the number in 
        for(const curr_block of number_blocks){
            if(curr_block.innerHTML === '0'){
                curr_block.innerHTML = last_entry;
                break;
            }
        } 
    }
});
