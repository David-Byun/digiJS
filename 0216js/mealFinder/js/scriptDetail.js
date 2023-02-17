const detail = document.querySelector('#detail');
let query = window.location.search;
let param = new URLSearchParams(query);
let id = param.get('id');
const backBtn = document.querySelector('.far');

backBtn.addEventListener('click', () => {
  location.href = 'index.html';
});
window.onload = callDetails;

function callDetails() {
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((data) => {
      detail.innerHTML = `
        <h1 class="title">
            ${data.meals[0].strMeal}
        </h1>
        
        <iframe width="560" height="315" src="https://www.youtube.com/embed/${data.meals[0].strYoutube.substr(
          32,
          44
        )}?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen></iframe>
        
        <div class="description">
        <h2>요리법</h2>
        ${data.meals[0].strInstructions}
        </div>
      `;
    });
}
