$(function () {
  $('.top div:nth-child(2n)').css('background-color', 'red');
  $('.top div:nth-child(2n-1)').css({
    'background-color': 'green',
    border: '1px solid black',
  });
  $('.num').text('number');
});

$('.btn').on('click', () => {
  $('html').css('background-color', 'black');
});
