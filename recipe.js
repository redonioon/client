let detailrecipe = []
$(document).ready(function () {
  getRepo()
})
function getRepo() {
  $('#foodbutton').click(function () {
    axios.post("http://localhost:3000/apiRecipe", {
      foodName: $("#food").val()
    })
      .then(function ({ data }) {
        detailrecipe = data.hits
        $("#listrecipe").empty()
        for (let i = 0; i < data.hits.length; i++) {
          $("#listrecipe").append(`
          <div class="d-inline-flex">
          <div class="container>
          <div class="card" style="width: 300px" style="height: 200px">
          <img class="card-img-top" src="${data.hits[i].recipe.image}" alt="no image">
          <h4 class="card-title" onclick= "detail('${data.hits[i].recipe.label}')" >${data.hits[i].recipe.label}</h4>
          <p class="card-text" id="${i}-detail-recipe"></p>
          </div>
          </div>
          </div>
          `)
        }
      })
      .catch(err => {
        console.log(err);
      })
  });

}
function detail(name) {
  for (let i = 0; i < detailrecipe.length; i++) {
    $(`#${i}-detail-recipe`).empty()
    if (detailrecipe[i].recipe.label == name) {
      detailrecipe[i].recipe.ingredientLines.forEach(element => {
        $(`#${i}-detail-recipe`).append(`
              <li> ${element}</li>
            `)
      });
    }
  }
}