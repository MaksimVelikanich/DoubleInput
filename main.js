let field0 = document.getElementById('field-0');
let field1 = document.getElementById('field-1');
let line = document.querySelector('.line');
let emptyMessage = document.getElementById('empty');
let field0InitialValue = '';
let field1InitialValue = '';

// Function to check if at least one field is empty
function isAnyFieldEmpty() {
    return field0.value.trim() === '' || field1.value.trim() === '';
}

// Function to check if fields had initial values and are now empty
function areFieldsCleared() {
    return (field0.value.trim() === '' && field0InitialValue !== '') || (field1.value.trim() === '' && field1InitialValue !== '');
}

// Save initial values of the fields
field0InitialValue = field0.value.trim();
field1InitialValue = field1.value.trim();

// Check if a field is empty after losing focus
field0.addEventListener('blur', function() {
    if (this.value.trim() === '') {
        emptyMessage.style.display = 'block';
    } else {
        emptyMessage.style.display = 'none';
    }
    line.style.background = isAnyFieldEmpty() ? 'red' : 'yellow';
});

field1.addEventListener('blur', function() {
    if (this.value.trim() === '') {
        emptyMessage.style.display = 'block';
    } else {
        emptyMessage.style.display = 'none';
    }
    line.style.background = isAnyFieldEmpty() ? 'red' : 'gray';
});

// Set focus on the field when clicking on the component
document.querySelector('.container').addEventListener('click', function(event) {
    if (event.target !== field0 && event.target !== field1) {
        field0.focus();
    }
});

// On page load, set the initial line color to gray
document.addEventListener('DOMContentLoaded', function() {
    line.style.background = 'gray';
});

// Function to restrict allowed characters in input
function restrictInput(inputElement) {
    inputElement.addEventListener('input', function() {
        const regex = /[^-?\d.]/g;
        this.value = this.value.replace(regex, '');

        if (this.value === '') {
            this.setAttribute('size', 1);
        } else {
            this.setAttribute('size', this.value.length);
        }
        adjustInputWidth();
        line.style.background = isAnyFieldEmpty() ? 'red' : 'yellow';
    });
}

restrictInput(field0);
restrictInput(field1);

// Final adjustments to the input field's width
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

// Change the line color to gray when clicking any element except .container
document.addEventListener('click', function(event) {
    if (!event.target.closest('.container')) {
        line.style.background = isAnyFieldEmpty() ? 'red' : 'gray';
    }
});
