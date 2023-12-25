//Hagstrom Moving Meme Assignment
//main.js for Event Driven Programming Assignment

// Grab important elements from DOM
let start_button = document.getElementById("start_button");
let stop_button = document.getElementById("stop_button");
let moving_img = document.getElementById("img-container");
let boundary = document.getElementById("boundary");

// Basic movement information
let xpos = 20;
let ypos = 20;
let xSpeed = 5;
let ySpeed = 5;
let fps = 60;
// Global variable to store the interval IDs returned by setInterval
let interval_id = 0;


function update_animation() {
        moving_img.style.left = xpos + "px";
        moving_img.style.top = ypos + "px";
}

function stop_animation(interval_id) {
        clearInterval(interval_id);
}


function run_animation () {
        return setInterval(
        () => {
        if ( xpos + moving_img.clientWidth >= boundary.clientWidth || xpos <= 0) {
                xSpeed = -xSpeed;
        }
        if ( ypos + moving_img.clientWidth >= boundary.clientHeight || ypos <= 0) {
                ySpeed = -ySpeed;

        }
                xpos += xSpeed;
                ypos += ySpeed;
                update_animation();
        }, 1000/ fps
        );
}

function toggle_button() {
        if (start_button.disabled === false) {
                start_button.disabled = true;
                stop_button.disabled = false;
                interval_id = run_animation();
        }
        else {

                start_button.disabled = false;
                stop_button.disabled = true;
                stop_animation(interval_id);


        }
}

// start_button.addEventListener("click", toggle_button);
// stop_button.addEventListener("click", toggle_button);

// Start out with the stop button being disabled
stop_button.disabled = true;
