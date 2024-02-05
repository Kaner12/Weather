document.addEventListener('DOMContentLoaded', function () {
    
    function showMoreInfo(button) {
      var card = button.closest('.cards');
      var moreInfo = card.querySelector('.more-info');
      card.classList.toggle('show-more-info');
      moreInfo.classList.toggle('show');

      button.classList.toggle('expanded');  

      var buttonText = button.textContent.trim();

      button.textContent = buttonText === 'Подробнее' ? 'Скрыть' : 'Подробнее';
    }
    
    window.showMoreInfo = showMoreInfo;
  });