let id = new URLSearchParams(window.location.search).get('id');

$('.far').on('click', () => {
  location.href = 'index.html';
});
$(function () {
  $.ajax({
    url: `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
    type: 'GET',
    dataType: 'json',
    success: (data) => {
      $('#detail').html(`
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
      `);
    },
    error: function (err) {
      alert('데이터를 불러오지 못했어요');
    },
  });
});
