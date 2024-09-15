//Возвращает соответствующее значение input
let checkbox = document.querySelector('#cloneCheckbox');
//Возвращает соответствующее значение div
let separator = document.querySelector('#separator');

//Обработчик событий
//Копирует текст, когда checkbox активен
//Убирает текст, когда checkbox не активен
checkbox.addEventListener('change', function() {
    //Проверяет установлен ли флаг или нет
    if (this.checked) {
        //Переменная, которая хранит текст
        let textConten = '';
        //Парсим тег body на наличие текста в дочерних тегах
        document.querySelectorAll('body *:not(#cloneCheckbox, #separator)').forEach(function(element) {
            //Проверяет содержет ли тег текст или нет
            if (element.childNodes.length > 0) {
                textConten = element.innerText + ' ';
            }
        });
        //Вставляем найденый текст в тег div
        separator.innerText += textConten.trim();
    } else {
        separator.innerText = '';
    }
});