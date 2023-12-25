//Javascript Game to be linked to HTML
const wordList=["apple","banana","orange","pear","grape","pineapple","strawberry","blueberry","raspberry","blackberry","watermelon","cantaloupe","honeydew","kiwi","mango","papaya","peach","plum","cherry","lemon","lime","coconut","fig","grapefruit","guava","apricot","nectarine","pomegranate","tangerine","tomato","avocado","persimmon","starfruit","lychee","passionfruit","dragonfruit","durian","breadfruit","jackfruit","kumquat","mangosteen","quince","rhubarb","salak","sapodilla","ugli","yuzu","zucchini","acai","ackee","breadnut","carambola","cupuacu","feijoa","goji","guanabana","jabuticaba","jambul","kiwano","langsat","loquat","mamey","mangaba","marang","noni","pawpaw","pepino","pitaya","rambutan","soursop","tamarillo","tamarind","ugni","yamamomo","yantok","yumberry","zinfandel","ziziphus","zuchinni"];
console.log(wordList.length-1);

let word = wordList[Math.floor(Math.random() * wordList.length)];
console.log(word);
// Get the container element in the DOM
const container = document.getElementById("word");

// Generate underscores equal to the length of the word
const underscores = "_ ".repeat(word.length);

// Set the underscores as the content of the container
container.textContent = underscores;

// Get the input element in the DOM
const input = document.getElementById("letter");

//Link to wrong letters guessed list
const wrong_letters = document.getElementById("wrongLetters");

//Guess Counter initial number
let guesses = document.getElementById("guesses");
guesses.textContent = 0;
let guesscount = 0;

//Get restart button
let restartdiv = document.getElementById("restartgame");
restartdiv.style.display = "none";

// Get the button element in the DOM
const button = document.getElementById("letterGuess");

function triggerButtonClick(event) {
    if (event.key === "Enter") {
        button.click();
    }
}

document.addEventListener("keydown", triggerButtonClick);


function inputGuess() {
    // Increase the guess counter
    guesscount++;
    guesses.textContent = guesscount;
    // Get the letter from the input element
    const letter = input.value;
    console.log(letter);
    // Get the content of the container
    let underscores = container.textContent;
    console.log(underscores);
    // Convert the string into an array
    underscores = underscores.split(" ");
    console.log(underscores);

    // Check if the letter matches a letter in the word
    let correct = false;

    
    for (let i = 0; i < word.length; i++) {
        // Check if the letter matches a letter in the word
        if (letter === word[i]) {
            // Replace the underscore with the letter
            underscores[i] = letter;
            correct = true;
        }
        
    }

    if (correct === false) {
        // Add the letter to the wrong letters list
        wrong_letters.textContent += (letter + " ");
    }

    // Convert the array back into a string
    underscores = underscores.join(" ");
    // Set the new content of the container
    container.textContent = underscores;
    // Clear the input
    input.value = "";
    // Check if the word is complete
    if (underscores.indexOf("_") === -1) {
        winAlert();}
    }


button.addEventListener("click", inputGuess);

//alert popup upon winning
function winAlert() {
    endgame.textContent=("You Win!");
    input.disabled = true;
    button.disabled = true;
    restartdiv.style.display = "flex";
}

//alert popup upon losing
function loseAlert() {
    endgame.textContent=("You Lose!")+(" The word was ")+(word);
    input.disabled = true;
    button.disabled = true;
    restartdiv.style.display = "flex";
}

//restartbutton
function restartgame() {
    location.reload();
}
restartbutton.onclick = restartgame;

//Health
let initial_health = Math.floor(word.length*0.85);
let health = document.getElementById("health");
health.textContent = initial_health;
console.log(health);

function healthUpdate() {
    health.textContent = initial_health - (wrong_letters.textContent.split(" ")).length;
    console.log(health);
    if (parseInt(health.textContent) <= 0) {
        loseAlert();
    }
}
button.addEventListener("click", healthUpdate);