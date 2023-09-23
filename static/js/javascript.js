const textarea = document.getElementById('Clickarea');
const button = document.getElementById('Buttonarea');

// Добавляем обработчик события на фокус (нажатие) элемента textarea
textarea.addEventListener('focus', () => {
    // Показываем кнопку при фокусе на textarea
    button.style.display = 'block';
});

// Добавляем обработчик события на размытие (потеря фокуса) элемента textarea
textarea.addEventListener('blur', () => {
    // Скрываем кнопку при потере фокуса на textarea
    button.style.display = 'none';
});