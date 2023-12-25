//Hagstrom_PalindromeChecker with login

let wordinput = document.getElementById ("wordinput");



//console.log(palindromeinput.style.display);

//palindromeinput.style.display = "none";

//console.log(palindromeinput.style.display);

function checkCreds()
{
    //concatenate both names into a single string
    let fullname = document.getElementById ("firstname").value + (" ") + document.getElementById ("lastname").value;
    let palindromeinput = document.getElementById ("palindromeinput");

if ((fullname.length - 1) <20)
    {

        if (zip.value >9999 && zip.value < 100000)
        {
            location.replace("strings.html"); //wouldn't work
            //console.log(palindromeinput.style.display);

            //palindromeinput.style.display = "block";

            //console.log(palindromeinput.style.display);

        }
        else
        {
            alert("Invalid zipcode");
        }
    }
    else
    {
        alert("Name must be less than 20 characters");
    }

}

function arming()
{
    let armbutton = document.getElementById ("arm");
    if (armbutton.value === "armed")
    {
        armbutton.value = "disarmed";
        armbutton.textContent = "Disarmed";
        armbutton.style.backgroundColor = "red";
    }
    else
    {
        armbutton.value = "armed";
        armbutton.textContent = "Armed";
        armbutton.style.backgroundColor = "green";
    }
}

function palindromechecker(validator)
{
    //
    validator = validator.replaceAll(/\s/g,'');
    validator=validator.toLowerCase();
    console.log (validator);
    let wordlength = validator.length;
    //it's okay to use some direct math here because we know midindex will always have more after it because that's how our palindrome checker works.
    let midindex = Math.floor(parseInt(wordlength / 2,10));
    let validatorarr = validator.split("");
    let startarr = validatorarr.slice(0,midindex);
    let endarr = validatorarr.slice(midindex+1);
    let midarr = [validatorarr[midindex]];

    let reversedstartstring = startarr.reverse().join("");
    let reversedendstring = endarr.reverse().join("");
    let tempstring = reversedendstring.concat(midarr[0],reversedstartstring);
    let result = tempstring === validator ? true : false;
    return result;
}

function play_sound_effect(indicator) {
       if (indicator === true )  {
                let goodSound = document.getElementById("success-sound");
                goodSound.play();
       }
        else {

                let badSound = document.getElementById("fail-sound");
                badSound.play();
        }
}

let armbutton = document.getElementById ("arm");
armbutton.addEventListener ("click", arming);
let checkbutton = document.getElementById ("checkbutton");
checkbutton.addEventListener ("click", function()
{
    if(document.getElementById ("arm").value === "disarmed")
    {
        alert("You must arm the palindrome checker first!");
        return;
    }

    let validator = wordinput.value;
    let result = palindromechecker(validator);
    let resulttext = document.getElementById ("resulttext");
    resulttext.textContent = result ? "It's a palindrome!" : "It's not a palindrome!";
    let nonpalindromelist = document.getElementById ("nonpalindromelist");
    let palindromelist = document.getElementById ("palindromelist");

    if (result)
    {
        let result_output = document.createElement("li");
        result_output.appendChild(document.createTextNode(validator));
        palindromelist.appendChild(result_output);
        play_sound_effect(true);
    }
    else
    {
        let result_output = document.createElement("li");
        result_output.appendChild(document.createTextNode(validator));
        nonpalindromelist.appendChild(result_output);
        play_sound_effect(false);
    }
    wordinput.value = "";
});



//[r,a],[d],[a,r]
