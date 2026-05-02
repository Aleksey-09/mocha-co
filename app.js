const tabs = document.querySelectorAll('.m-tab'); // находим все кнопки

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    
    // убираем active у всех
    tabs.forEach(t => t.classList.remove('active'));
    
    // добавляем active только на нажатую
    tab.classList.add('active');
    
  });
});