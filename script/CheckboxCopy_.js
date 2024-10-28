function toggleClone() {
    const checkbox = document.getElementById('cloneCheckbox');
    const cloneDiv = document.getElementById('cloneDiv');
    const clonedContent = document.getElementById('clonedContent');

    if (checkbox.checked) {
        // Клонирование текста всех текстовых элементов
        const textElements = document.querySelectorAll('.container .cell');
        clonedContent.innerHTML = '';
        textElements.forEach(function(elem) {
            clonedContent.innerHTML += elem.innerText + '<br>';
        });
        cloneDiv.style.display = 'block';
    } else {
        // Удаление клонированного контента
        clonedContent.innerHTML = '';
        cloneDiv.style.display = 'none';
    }
}
