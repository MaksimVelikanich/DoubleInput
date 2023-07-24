let inputs = document.querySelectorAll("input");
let line = document.querySelector(".line");
let emptyMessage = document.getElementById("empty");
// change color of line,focus
for (input of inputs) {
    input.addEventListener("focus", (e) => {
        line.style.backgroundColor = "#ff7300";
    });

    input.addEventListener("blur", function() {
        if (this.value === "") {
            line.style.backgroundColor = "black";
            emptyMessage.style.display = "block";
        }
    });

    input.addEventListener("input", function() {
        if (this.value !== "") {
            line.style.backgroundColor = "#ff7300";
            emptyMessage.style.display = "none";
        } else {
            line.style.backgroundColor = "red";
            emptyMessage.style.display = "block";
        }
    });
}

document.addEventListener("click", function(event) {
    if (!event.target.closest(".down") && event.target.closest(".container")) {
        line.style.backgroundColor = "black";
        emptyMessage.style.display = "none";
        inputs[0].focus();
    }
});

// Sets the size of the input field based on the number of characters in the entered text.
function inputSize(){
    let inputsSize = document.querySelectorAll('input');
    inputsSize.forEach(input => {
        input.addEventListener('input', resizeInput);
    });
}

// Automatically resizes the input field based on the number of characters in the text entered.

function resizeInput(){
    this.setAttribute('size', this.value.length);
}
// Called when text is entered in the input field, processes the input data and calls the adjustInputWidth() function to change the field width.
function inputEventHandler() {
    this.value = this.value.replace(/[^-?\d.]/g, '');
    if (this.value === "") {
        this.setAttribute('size', 1); // Встановлюємо початковий розмір поля, якщо воно порожнє
    } else {
        this.setAttribute('size', this.value.length); // Змінюємо розмір поля на основі кількості символів
    }
    adjustInputWidth();
}


// Changes the width of the input field based on the length of the text entered, but limits it to a maximum value of 200 pixels.

function adjustInputWidth() {
    const inputElement = document.getElementById('field-0');
    inputElement.style.width = 'auto';
    const scrollWidth = inputElement.scrollWidth;
    if (scrollWidth > 200) { 
        inputElement.style.width = '200px';
    } else {
        inputElement.style.width = scrollWidth + 'px';
    }
}

// register inputEventHandler() event listeners for both input fields (field-0 and field-1) and call inputSize() functions
document.getElementById('field-0').addEventListener('input', inputEventHandler);
document.getElementById('field-1').addEventListener('input', inputEventHandler);

inputSize();

