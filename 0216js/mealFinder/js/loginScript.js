const form = document.querySelector('form');
const name = document.querySelector('#name');
const btn = document.querySelector('.btn');
const single_meal = document.querySelector('#single_meal');
const meals = document.getElementById('meals');
const search_result = document.getElementById('result');
const result = document.getElementById('result');
const meals_by_category = document.getElementById('meals-by-category');
const mealImage = document.querySelector('.meal-img');
const h1 = document.querySelector('h1');
const span = document.querySelector('#span');
const mealfind = document.querySelector('#search-meal');

window.onload = callCategories;

form.addEventListener('submit', searchMeal);

// 음식 검색 로직 //
function searchMeal(e) {
  e.preventDefault();
  meals.innerHTML = '';
  if (name.value != '') {
    callAPI(name.value);
    name.value = '';
    btn.value = '카테고리 보기';
  } else {
    callCategories();
    btn.value = '검색';
  }
}

// 검색시 api 실행
const callAPI = async (meal) => {
  await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${meal}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.meals != null) {
        let countMeals = data.meals.length;
        h1.innerText = `${countMeals}개의 음식을 찾았어요!`;
        span.innerText = '(음식을 클릭하면 요리 영상이 보여요!)';
        meals.innerHTML = data.meals
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
          .join('');
      } else {
        callCategories();
        btn.value = '검색';
        alert('입력한 카테고리는 올바르지 않습니다.');
      }
    });
};

// 로드시 api 실행
function callCategories() {
  h1.innerText = '음식 카테고리를 검색해주세요';
  span.innerText = '';
  meals.innerHTML = '';
  fetch('https://www.themealdb.com/api/json/v1/1/categories.php', {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((data) => {
      meals.innerHTML = data.categories
        .map(
          (categories) =>
            `<div class="category"><h4>${categories.strCategory}</h4><img id="category-img" src="${categories.strCategoryThumb}" alt="${categories.strCategory}" /></div>`
        )
        .join('');
    });
}
