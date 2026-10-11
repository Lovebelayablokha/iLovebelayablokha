// Ждем, пока вся HTML-структура загрузится
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Находим элементы на странице
    const konvertImg = document.querySelector('.konvert');
    const jopaTitle = document.querySelector('.jopa');
    const sisiBlock = document.querySelector('.sisi');

    // 2. Проверяем, что элементы существуют, чтобы избежать ошибок
    if (konvertImg && jopaTitle && sisiBlock) {
        
        // 3. Добавляем обработчик клика на картинку .konvert
        konvertImg.addEventListener('click', () => {
            
            // Меняем стили для .konvert и .jopa на display: none
            konvertImg.style.display = 'none';
            jopaTitle.style.display = 'none';
            
            // Меняем стиль для .sisi на display: block
            sisiBlock.style.display = 'block';
        });
    }
});