$('document').ready(function () {
    console.log(localStorage.getItem('token'), 'ahahahahah')
    if (localStorage.getItem('token')) {
        // $('#bridging').show()
        $('#main').hide()
        $('#main').show()
        $('#landing').hide()
    } else {
        toSignin()
    }
})

const baseUrl = `http://localhost:3000`

function toMain() {
    $('#main').show()
    $('#bridging').hide()
    $('#detail').hide()
    $('#pict').hide()
    $('#video').hide()
    $('#about').hide()
}

function redirRecipt() {
    $('#recipt').show()
    $('#detail').hide()
    $('#pict').hide()
    $('#video').hide()
    $('#about').hide()
    $('#pict').hide()
}

function redirPict() {
    $('#recipt').hide()
    $('#detail').hide()
    $('#pict').hide()
    $('#video').hide()
    $('#about').hide()
    $('#pict').show()
}
// function redirDetail() {
    
// }