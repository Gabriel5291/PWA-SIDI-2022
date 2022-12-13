function validar(){
    body = {
        "email": email,
        "password": password
      }
    url = "http://localhost:8080/api/login"
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;

    request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "aplication/json")
    request.send(JSON.stringify(body))

    if(response.getStatusCode() == 200) {
      alert('Você está logado');
      location.href = '/mainpage.html'
    } else {
      alert("Usuário ou senha inválidos");
    }

    return
  } // retorna um texto

  let newWorker;
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js').then(reg => {
        reg.addEventListener('updatefound', () => {
          newWorker = reg.installing;
          newWorker.addEventListener('statechange', () => {           
          });
        });
      });
      let refreshing;
      navigator.serviceWorker.addEventListener('controllerchange', function () {
        if (refreshing) return;
        window.location.reload();
        refreshing = true;
      });
    }