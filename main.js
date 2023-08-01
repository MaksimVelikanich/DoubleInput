let field0 = document.getElementById('field-0');
let field1 = document.getElementById('field-1');
let line = document.querySelector('.line');
let emptyMessage = document.getElementById('empty');
let field0InitialValue = '';
let field1InitialValue = '';

// Функція для перевірки, чи хоча б одне поле порожнє
function isAnyFieldEmpty() {
    return field0.value.trim() === '' || field1.value.trim() === '';
}

// Функція для перевірки, чи поля мали початкові значення і зараз порожні
function areFieldsCleared() {
    return (field0.value.trim() === '' && field0InitialValue !== '') || (field1.value.trim() === '' && field1InitialValue !== '');
}

// Зберігаємо початкові значення полів
field0InitialValue = field0.value.trim();
field1InitialValue = field1.value.trim();

// Перевіряємо, чи поле порожнє після втрати фокуса
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

// Встановлюємо фокус на поле при кліку на компоненті
document.querySelector('.container').addEventListener('click', function(event) {
    if (event.target !== field0 && event.target !== field1) {
        field0.focus();
    }
});

// При загрузці сторінки, також встановлюємо початковий колір лінії
document.addEventListener('DOMContentLoaded', function() {
    line.style.background = 'gray';
});

// Функція для обмеження допустимих символів у введенні
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

// Остаточне налаштування розмірів поля
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

// Змінюємо колір лінії на сірий при кліку на будь-який елемент крім .container
document.addEventListener('click', function(event) {
    if (!event.target.closest('.container')) {
        line.style.background = isAnyFieldEmpty() ? 'red' : 'gray';
    }
});
