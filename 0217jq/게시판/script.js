$(function () {
  $('.top div:nth-child(2n)').css('background-color', 'red');
  $('.top div:nth-child(2n-1)').css({
    'background-color': 'green',
    border: '1px solid black',
  });
});

$('.btn').on('click', () => {
  $('.number li:nth-last-child(1)').css('background-color', 'blue');
  $('ul').toggle();
  $('.btn').html(`<span>${new Date()}</span>`);
});

$('.top').on('mouseover', (e) => {
  let madeHtml = '<h3>게시판 놀이</h3>';
  $('.top').after(madeHtml);
});

$('.top').on('mouseout', (e) => {
  $('h3').remove();
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

$('.title').hover(
  () => {
    $('.title').css({
      'text-decoration': 'underline',
    });
  },
  () => {
    $('.title').css({
      'text-decoration': 'none',
    });
  }
);

$('.prev').hover(
  () => {
    $('.prev').css({
      'background-color': '#ff2',
    });
  },
  () => {
    $('.prev').css({
      'background-color': '#fff',
    });
  }
);

$(function () {
  $('.card-header').delegate('.on', 'mouseover focus', (e) => {
    $('.head').css({
      'background-color': '#ff2',
      'text-decoration': 'underline',
    });
  });
  $('.head').addClass('on');
});

$(document).on('keydown', keyEvent);
function keyEvent(e) {
  switch (e.keyCode) {
    case 37:
      alert('left');
      break;
    case 38:
      alert('top');
      break;
    case 39:
      alert('right');
      break;
    case 40:
      alert('bottom');
      break;
  }
}

$(document).on('scroll', (e) => {
  let sc_top = $(this).scrollTop();
  $('.page').html(
    `<h2>페이지 스크롤하면 나와요! 맨 위로부터 거리 : ${sc_top}px</h2>`
  );
});
