let detailrecipe = []
$(document).ready(function () {
  getRepo()
})
function getRepo(){
  $('#foodbutton').click(function () {
    axios.post("http://localhost:3000/apiRecipe", {
      foodName: $("#food").val()
    })
      .then(function ({ data }) {
        detailrecipe = data.hits
        $("#listrecipe").empty()
        for (let i = 0; i < data.hits.length; i++) {
          $("#listrecipe").append(`
          <br>
          <img src="${data.hits[i].recipe.image}" alt="no image" width="100" height="100">
          <p onclick= "detail('${data.hits[i].recipe.label}')" >${data.hits[i].recipe.label}</p>
          <p id="${i}-detail-recipe"></p>
          `)
        }
      })
      .catch(err => {
        console.log(err);
      })
  });
  
}
    function detail(name) {
      console.log(name)
      console.log(detailrecipe);
      for (let i = 0; i < detailrecipe.length; i++) {
        if (detailrecipe[i].recipe.label == name) {
          console.log(detailrecipe[i].recipe.ingredientLines)
          detailrecipe[i].recipe.ingredientLines.forEach(element => {
            console.log(element);
            $(`#${i}-detail-recipe`).append(`
              <li> ${element}</li>
            `)
          });
        }
      }
    }