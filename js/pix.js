
function getImage(food) {
  axios.get(`http://localhost:3000/pixabay/search?searchImage=${food}`)
    .then(({ data }) => {
      for ( let i = 0  ; i < data.length ; i++) {
        console.log(data[i]);
        $("#imagepix").append(`
        <figure class="image is-128x128">
                <img class="is-rounded" src="${data[i]}">
              </figure>
        `)
      }
    })
    .catch(err => {
      console.log(err);
    })
}