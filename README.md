#Documentacion API rest InGamer

#ENDPOINTS

#USERS ENDPOINT

API users devuelve un array de objetos con todos los datos de cada usuario

- esta API requiere que la llamada a la API de Users se realice desde el lado del cliente.

#URL de Users


#peticion GET

api-ingamer.herokuapp.com/api/users

Respuesta exitosa (200 OK)

ejemplo

[

    {
        "id": "33"
        "username": "prueba",
        "email": "prueba@gmail.com",
        "password": "123456789",
        "nickname": "nickprueba"
    },

    {
        "username": "prueba2",
        "email": "prueba2@gmail.com",
        "password": "987654321",
        "nickname": "prueba2"
    }


]

#Data:

#Users object

Estos objetos contienen una variedad de información referente a los usuarios registrados

Propiedad	                    Ejemplo

id: string
id único de este usuario        "33"

username: string
nombre del ussuario             "prueba" 


email: string                  
direccion de correo 
electronico del usuario         "prueba@gmail.com"



nickname: string
Apodo del usuario                "nickprueba"



#USERS/REGISTER ENDPOINT

para utilizar este endpoint se necesita enviar un objeto contenido con los datos requeridos por la base de datos:

username: string
email: string
password: string
nickname: string

#peticion POST

api-ingamer.herokuapp.com/api/users/register




ejemplo

let url = "api-ingamer.herokuapp.com/api/users/register";
let data = {
    "username": "prueba",
    "email": "prueba@gmail.com",
    "password": "123456789",
    "nickname": "nickprueba"
}

fetch(url, {
  method: 'POST',
  body: JSON.stringify(data),
  headers:{
    'Content-Type': 'application/json'
  }
}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response));


Respuesta exitosa (201 OK) 

{
    ok: true,
    msg: "Registered user"
}


Respuesta fallida (400) 

{
    ok: false,
    msg: "Invalid password"
}

Respuesta fallida (500 ) 

{
    ok: false,
    msg: "An error has arisen in the process, please review"
}


#USERS/LOGIN ENDPOINT

para utilizar este endpoint se necesita enviar un objeto contenido con los datos requeridos por la base de datos:

email: string
password: string

#peticion POST

api-ingamer.herokuapp.com/api/users/login


ejemplo

let url = "api-ingamer.herokuapp.com/api/users/login";
let data = {
    "email": "prueba@gmail.com",
    "password": "123456789"
}

fetch(url, {
  method: 'POST',
  body: JSON.stringify(data),
  headers:{
    'Content-Type': 'application/json'
  }
}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response));


Respuesta exitosa (200 OK) 

{
    ok: true,
    id: idDB,
    username: usernameDB,
    emial: emailDB,
    token
}


Respuesta fallida (400) 

{
    ok: false,
    msg: "User not exist with email"
}

Respuesta fallida (500 ) 

{
    ok: false,
    msg: "An error has arisen in the process, please review"
}
