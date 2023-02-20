$(function () {
  $('.top div:nth-child(2n)').css('background-color', 'red');
  $('.top div:nth-child(2n-1)').css({
    'background-color': 'green',
    border: '1px solid black',
  });
  $('.num').text('number');
});

$('.btn').on('click', () => {
  $('.number li:nth-last-child(1)').css('background-color', 'blue');
  $('ul').toggle();
  $('.btn').html(`<span>${new Date()}</span>`);
});

$('btn').on({
  'mouseover focus': () => {
    $('.name').next().css({
      color: '#050',
    });
  },
  'mouseout blur': () => {
    $('.title').css({
      background: '#ff2',
    });
  },
});
