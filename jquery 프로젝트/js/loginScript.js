$(function () {
  callCategories();
});

$('form').on('submit', searchMeal);

// 음식 검색 로직 //
function searchMeal(e) {
  e.preventDefault();
  $('#meals').html('');
  if ($('#name').val() != '') {
    callAPI($('#name').val());
    $('#name').val('');
    $('.btn').val('카테고리 보기');
  } else {
    callCategories();
    $('.btn').val('검색');
  }
}

// 검색시 api 실행
const callAPI = (meal) => {
  $.ajax({
    url: `https://www.themealdb.com/api/json/v1/1/filter.php?c=${meal}`,
    type: 'GET',
    dataType: 'json',
    success: (data) => {
      if (data.meals != null) {
        let countMeals = data.meals.length;
        $('h1').text(`${countMeals}개의 음식을 찾았어요!`);
        $('span').text('음식을 클릭하면 요리 영상이 보여요!');
        $('#meals').html('');
        $('#meals').html(
          data.meals
            .map(
              (meals) =>
                `<div class="category"><h4>${meals.strMeal.substr(
                  0,
                  37
                )}</h4><a href="detail.html?id=${
                  meals.idMeal
                }""><img id="category-img" src="${meals.strMealThumb}" alt="${
                  meals.strMealThumb
                }" width="320px" height="200px"></a></div>`
            )
            .join('')
        );
      } else {
        callCategories();
        $('.btn').val('검색');
        alert('입력한 카테고리는 올바르지 않습니다.');
      }
    },
  });
};

// 로드시 api 실행
function callCategories() {
  $('h1').text('음식 카테고리를 검색해주세요');
  $('span').text('');
  $('#meals').html('');
  $.ajax({
    url: 'https://www.themealdb.com/api/json/v1/1/categories.php',
    type: 'GET',
    dataType: 'json',
    success: (data) => {
      $('#meals').html(
        data.categories
          .map(
            (categories) =>
              `<div class="category"><h4>${categories.strCategory}</h4><img id="category-img" src="${categories.strCategoryThumb}" alt="${categories.strCategory}" /></div>`
          )
          .join('')
      );
    },
  });
}
