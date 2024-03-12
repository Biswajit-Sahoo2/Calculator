let input = document.querySelector(".result");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        //If equal button is clicked evaluate the string
        if (e.target.innerHTML == "=") {
            string = eval(string);
            input.value = string;
        }
        else if (e.target.innerHTML == "AC") {
            //If AC button is clicked clear the string
            string = "";
            input.value = string;
        }
        else if (e.target.innerHTML == "DEL") {
            //If DEL button is clicked then delete the latest entered value
            string = string.substring(0,string.length-1);
            input.value = string;
        }
        else {
            
            string = string + e.target.innerHTML;
            input.value = string;
        }
    })
})
