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
  
  function createCollapseButtons() {
    $('h2').click(function () {
      var section = $(this).closest('section'); 
      if (section.hasClass('collapsed')) section.removeClass('collapsed'); 
      else section.addClass('collapsed');
    });
  }
  
  function collapsePastSections() {
    var collapsible = $('[data-collapse-after]');
    for (let i = 0; i < collapsible.length; i++) {
      let date = new Date($(collapsible[i]).attr('data-collapse-after'));
      if (date.getTime() < new Date().getTime()) {
        $(collapsible[i]).addClass('collapsed');
      }
    }
    if ($('section.collapsed').length) {
      $(window).scrollTop($('section:not(.collapsed)').first().position().top);
    }
  }
  
  createMoreInfoButtons();
  createCloseButtons();
  createCollapseButtons();
  collapsePastSections();
  
}());