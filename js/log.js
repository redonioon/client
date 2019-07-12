function toSignin(){
    $("#signin").show()
    $("#signup").hide()
}
function toSignup(){
    $("#signin").hide()
    $("#signup").show()
}
function login() {
    $('.landing').hide()
    $('#bridging').show()
}

$("#registerpath").click(function () {
    console.log('kepencet dan menuju signup¸')
    toSignup()
})
$("#signinpath").click(function () {
    console.log('kepencet dan menuju signin¸')
    toSignin()
})
$("#signInReady").click(function () {
    console.log("menuju maing page")
    let username = $("#usernameLogin").val()
    let password = $("#passwordLogin").val()
    console.log(username, password)
    $.ajax({
            url: `${baseUrl}/users/signin`,
            type: 'POST',
            data: {
                username,
                password
            }
        })
        .done((data) => {
            console.log(data.token)
            localStorage.setItem('token', data.token)
            login()
        })
        .fail((err) => [
            console.log(err)
        ])
})
$("#signUpReady").click(function () {
    console.log('success regist')

    let username = $("#usernameRegister").val()
    let email = $("#emailRegister").val()
    let password = $("#passwordRegister").val()
    $.ajax({
            url: `${baseUrl}/users/signup`,
            type: `POST`,
            data: {
                username,
                password,
                email
            }
        })
        .done((data) => {
            console.log(data)
            toSignin()
        })
        .fail((err) => {
            console.log(err)
        })
})
$("#logoutpath").click(function () {
    console.log('ahahaha')
    localStorage.removeItem('token')
    signOut()
    logout()
})

function onSignIn(googleUser) {
    var id_token = googleUser.getAuthResponse().id_token;
    // var profile = googleUser.getBasicProfile();
    // console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    // console.log('Name: ' + profile.getName());
    // console.log('Image URL: ' + profile.getImageUrl());
    // console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    $.ajax({
        method: 'post',
        url: 'http://localhost:3000/users/login/google',
        data: {
            id_token: id_token
        }
    })
    .done( (JWTtoken) => {
        console.log(JWTtoken)
        localStorage.setItem('token', JWTtoken)
        login()
    })
    .fail( (err)=> {
        console.log(err)
    })
  }
  