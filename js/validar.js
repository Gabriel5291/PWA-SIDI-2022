function validar(){
    url = "http://localhost:8080/api/login"
    email = document.getElementById('email').value
    password = document.getElementById('password').value
    body = {
        "email": email,
        "password": password
      }

    request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "aplication/json")
    request.send(JSON.stringify(body))

    if(response.getStatusCode() == 200) {
      alert('Você está logado');
      location.href = '/mainpage.html'
    } else {
      alert("Usuário ou senha inválidos")
    }

    return
}

function logar() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  if(email == "user@sidi.org.br" && password == "sidi") {
    alert('Você está logado!!');
    location.href = "mainpage.html";
  } else {
    alert("Usuário ou senha inválidos");
  }
}