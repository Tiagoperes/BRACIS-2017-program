(function () {
	'use strict';
  
  function createMoreInfoButtons() {
    $('[data-event-id]').click(function () {
      $('.event-description[data-event="' + $(this).attr('data-event-id') + '"]').show();
      $('body').css('overflow', 'hidden');
    });
  }
  
  function createCloseButtons() {
    $('.event-description .close').click(function () {
      $(this).closest('.event-description').hide();
      $('body').css('overflow', 'auto');
    });
  }
  
  createMoreInfoButtons();
  createCloseButtons();
  
}());