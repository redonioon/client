let detailrecipe = []
let nutrience = []
let video

$(document).ready(function () {
  getRepo()
})

function getRepo() {
  $('#foodbutton').click(function () {
    name = $("#food").val()
    axios.post("http://localhost:3000/apiRecipe", {
        foodName: name
      })
      .then(function ({
        data
      }) {
        addVideo(name)
        getImage(name)
        detailrecipe = data.hits
        $("#listrecipe").empty()
        for (let i = 0; i < data.hits.length; i++) {
    
          $("#listrecipe").append(`
          <div class="card cardparent">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="${data.hits[i].recipe.image}" alt="Placeholder image" onclick="redirDetail('${data.hits[i].recipe.label}')">
                </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content ">
                <h4 class="card-title" onclick= "detail('${data.hits[i].recipe.label}')" >${data.hits[i].recipe.label}</h4>
                <p class="card-text cardtext" id="${i}-detail-recipe"></p>
                </div>
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
  console.log(name)
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

function redirDetail(name) {
  $('#recipt').hide()
  $('#detail').show()
  $('#pict').hide()
  $('#video').hide()
  $('#about').hide()
  console.log(name)
  let detailed = null
  for (let i = 0; i < detailrecipe.length; i++) {
    // $("#detail").empty()
    if (detailrecipe[i].recipe.label == name) {
      detailed = detailrecipe[i]
    }
  }
  // addVideo(name)
  appendDetail(detailed)
  console.log(detailed)
}

function appendDetail(recipeData){
  console.log(recipeData,'ini resep data')
  console.log(video, 'ini videop')
  let data = recipeData.recipe
  $('#videoyoutube').empty()
  $('#makanan').append(`
      <h1 class="title is-2"> ${data.label}</h1>
    `)
  for (let i = 0; i < video.length; i++) {
    
    $('#videoyoutube').append(`
      <h2 class="title is-5">${video[i].snippet.channelTitle}</h2>
      <iframe src="https://www.youtube.com/embed/${video[i].id.videoId}" height="auto" width="100%"></iframe>
    `)
  }
  
}


function addVideo(name){
console.log(name)
  axios.post(
      'http://localhost:3000/youtube/getdata'
  ,{
      searched: name
  })
  .then((result)=> {
    console.log(result,'jooajblvsjvbjlkascbnvai')
      video = result.data
  })
  .catch((err)=>{
      console.log(err)
  })
}