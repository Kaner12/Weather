document.addEventListener('DOMContentLoaded', function () {
    
    function showMoreInfo(button) {
      var card = button.closest('.card-container');
      var moreInfo = card.querySelector('.more-info');

      card.classList.toggle('show-more-info');
      moreInfo.classList.toggle('show');
      button.classList.toggle('expanded');  

      button.textContent =button.textContent.trim() === 'Подробнее' ? 'Скрыть' : 'Подробнее';
    }
    
    window.showMoreInfo = showMoreInfo;
  });