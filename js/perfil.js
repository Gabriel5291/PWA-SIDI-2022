function validar(){
    url = "http://localhost:8080/api/user"
    email = document.getElementById('emailedit').value
    password = document.getElementById('passwordedit').value
    firstName = document.getElementById('fistanameedit').value
    lastName = document.getElementById('lastnameedit').value
    body = {
        "email": email,
        "password": password,
        "fisrtName": firstName,
        "lastName": lastName
      }

    request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "aplication/json")
    request.send(JSON.stringify(body))

    return
}