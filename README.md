#Documentacion API rest InGamer

#ENDPOINTS

#USERS ENDPOINT

API users devuelve un array de objetos con todos los datos de cada usuario

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

Propiedad Ejemplo

id: string
id único de este usuario "33"

username: string
nombre del ussuario "prueba"

email: string  
direccion de correo
electronico del usuario "prueba@gmail.com"

nickname: string
Apodo del usuario "nickprueba"

#USERS/ID ENDPOINT

devuelve un objetos con todos los datos del usuario

#peticion GET

api-ingamer.herokuapp.com/api/users/:id

Respuesta exitosa (200 OK)

ejemplo

api-ingamer.herokuapp.com/api/users/33

    {
        "id": "33"
        "username": "prueba",
        "email": "prueba@gmail.com",
        "password": "123456789",
        "nickname": "nickprueba"
    },

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

#USERS/PROFILE ENDPOINT

para utilizar este endpoint se necesita enviar un objeto contenido con los datos requeridos por la base de datos:

id: number
username: string
email: string
password: string
nickname: string

y adicionalmente se necesita un header de autorizacion con el token del usuario logueado

#peticion PUT

api-ingamer.herokuapp.com/api/users/profile

ejemplo

let url = "api-ingamer.herokuapp.com/api/users/profile";

let data = {
"id": "7",
"username": "update prueba",
"email": "updateprueba@gmail.com",
"password": "938472829",
"nickname": " updateprueba"
}

fetch(url, {
method: 'PUT',
body: JSON.stringify(data),
headers:{
'Content-Type': 'application/json',
Authorization: `Bearer ${token}`
}
}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response));

Respuesta exitosa (201 OK)

{
ok: true,
msg: "User updated successfully",
updatedUser: {
username: username ,
email: email,
nickname: nickname,
token: token
}
}

Respuesta fallida (404)

{
ok: false,
msg: "User not found"
}

Respuesta fallida (500 )

{
ok: false,
msg: "An error has arisen in the process, please review"
}

#USERS/EDIT/ID ENDPOINT

para utilizar este endpoint se necesita especificar en el id en el end point y enviar un objeto contenido con los datos requeridos por la base de datos:

id: number
username: string
email: string
password: string
nickname: string

necesita un header de autorizacion con el token del usuario logueado

#peticion PUT

api-ingamer.herokuapp.com/api/users/edit/id

ejemplo

let url = "api-ingamer.herokuapp.com/api/users/edit/7";

let data = {
"username": "update prueba",
"email": "updateprueba@gmail.com",
"password": "938472829",
"nickname": " updateprueba"
}

fetch(url, {
method: 'PUT',
body: JSON.stringify(data),
headers:{
'Content-Type': 'application/json',
Authorization: `Bearer ${token}`
}
}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response));

Respuesta exitosa (201 OK)

{
ok: true,
msg: "User updated successfully"
}

Respuesta fallida (404)

{
ok: false,
msg: "User not found"
}

Respuesta fallida (500 )

{
ok: false,
msg: "An error has arisen in the process, please review"
}

#USERS/DELETE/ID ENDPOINT

para utilizar este endpoint se necesita especificar en el id en el end point

necesita un header de autorizacion con el token del usuario logueado

#peticion PUT

api-ingamer.herokuapp.com/api/users/delete/id

ejemplo

let url = "api-ingamer.herokuapp.com/api/users/delete/7";

fetch(url, {
method: 'DELETE',
headers:{
Authorization: `Bearer ${token}`
}
}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response));

Respuesta exitosa (201 OK)

{
ok: true,
msg: "User removed successfully"
}

Respuesta fallida (404)

{
ok: false,
msg: "User not found"
}

Respuesta fallida (500 )

{
ok: false,
msg: "An error has arisen in the process, please review"
}

#POSTS ENDPOINT

API posts devuelve un array de objetos con todos los datos de cada posts que han publicado los ususarios

necesita un header de autorizacion con el token del usuario logueado

#URL de Posts

#peticion GET

api-ingamer.herokuapp.com/api/posts

Respuesta exitosa (200 OK)

ejemplo

[
{
"id": 1,
"userid": 3,
"username": "prueba",
"avatar": null,
"title": "title",
"description": "description",
"image": "https://picsum.photos/id/1/200/300",
"posted": "2022-02-25T22:07:43.000Z",
"likes": 654
},
{
"id": 2,
"userid": 3,
"username": "prueba2",
"avatar": null,
"title": "Mira mi ultima jugada",
"description": "Estaba jugando con @juanito y de repente se me aparecio esto:",
"image": "https://picsum.photos/id/1/200/300",
"posted": "2022-02-25T02:35:35.000Z",
"likes": 654
}
]

#Data:

#Users object

Estos objetos contienen una variedad de información referente a los usuarios registrados

Propiedad Ejemplo

id: number
id único de este usuario "33"

userid: number
userid llave forania del usuario con su publicacion

username: string
nombre del ussuario "prueba"

avatar: string  
imagen, foto del usuario

title: string
encabezado de la publicacion

description: string
leyenda de la publicacion

image: string
foto publicada

posted: date
hora de publicacion

likes: number
numero de megustas de cada publicacion

#POSTS/ID ENDPOINT

devuelve un objetos con todos los datos del posts

necesita un header de autorizacion con el token del usuario logueado

#peticion GET

api-ingamer.herokuapp.com/api/posts/:id

Respuesta exitosa (200 OK)

ejemplo

let url = api-ingamer.herokuapp.com/api/posts/2";

fetch(url, {
method: 'GET',
headers:{
Authorization: `Bearer ${token}`
}
}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response));

Respuesta exitosa (200 OK)


{
  "ok": true,
  "post": {
    "id": 2,
    "userid": 3,
    "user": {
      "username": "prueba2",
      "avatar": null
    },
    "title": "update title",
    "description": "update description",
    "image": "https://picsum.photos/id/1/200/300",
    "posted": "2022-02-25T22:07:43.000Z",
    "likes": 654
  }
}

#POSTS/USERPOSTS/ID ENDPOINT

devuelve un objetos con todos los datos del posts por usuario

#peticion GET

api-ingamer.herokuapp.com/api/posts/userPosts/:id

ejemplo

let url = api-ingamer.herokuapp.com/api/posts/userPosts/2";

fetch(url, {
method: 'GET',
headers:{
Authorization: `Bearer ${token}`
}
}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response));

Respuesta exitosa (200 OK)

{
"id": 1,
"userid": 3,
"username": "prueba",
"avatar": null,
"title": "title",
"description": "description",
"image": "https://picsum.photos/id/1/200/300",
"posted": "2022-02-25T22:07:43.000Z",
"likes": 654
},

#POSTS post ENDPOINT

para utilizar este endpoint se necesita enviar un objeto contenido con los datos requeridos por la base de datos:

userid: number
title: string
description: string
image: string
likes: number

#peticion POST

api-ingamer.herokuapp.com/api/posts

ejemplo

let url = "api-ingamer.herokuapp.com/api/posts";

let data = {
"userid": "3",
"title": "Mira mi ultima jugada",
"description": "Estaba jugando con @juanito y de repente se me aparecio esto:",
"image": "https://picsum.photos/id/1/200/300",
"likes": 654
}

fetch(url, {
method: 'POST',
body: JSON.stringify(data),
headers:{
'Content-Type': 'application/json',
Authorization: `Bearer ${token}`
}
}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response));

Respuesta exitosa (201 OK)

{
ok: true,
msg: "Post created"
}

#POSTS/EDIT/ID ENDPOINT

para utilizar este endpoint se necesita especificar en el id en el end point y enviar un objeto contenido con los datos requeridos por la base de datos:

title: string
description: string

#peticion POST

api-ingamer.herokuapp.com/api/posts/edit/:id

ejemplo

let url = "api-ingamer.herokuapp.com/api/posts/edit/2";

let data = {
"title": "Mira mi ultima jugada",
"description": "Estaba jugando con @juanito y de repente se me aparecio esto:",
}

fetch(url, {
method: 'PUT',
body: JSON.stringify(data),
headers:{
'Content-Type': 'application/json',
Authorization: `Bearer ${token}`
}
}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response));

Respuesta exitosa (201 OK)

{
ok: true,
msg: "Post created"
}

#USERS/DELETE/ID ENDPOINT

para utilizar este endpoint se necesita especificar en el id en el end point

necesita un header de autorizacion con el token del usuario logueado

#peticion PUT

api-ingamer.herokuapp.com/api/posts/delete/id

ejemplo

let url = "api-ingamer.herokuapp.com/api/posts/delete/2";

fetch(url, {
method: 'DELETE',
headers:{
Authorization: `Bearer ${token}`
}
}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response));

Respuesta exitosa (201 OK)

{
ok: true,
msg: "Posts removed successfully"
}

#UPLOADS ENDPOINT

API uploads devuelve un string de la url de la imagen o video que haya guardado el usuario

necesita un header de autorizacion con el token del usuario logueado

#URL de uploads

#peticion POST

api-ingamer.herokuapp.com/api/uploads

ejemplo utilizando react en el frontend:

const [loadingUpload, setLoadingUpload] = useState(false);
const [errorUpload, setErrorUpload] = useState('');

const userSignin = useSelector((state) => state.userSignin);

const { userInfo } = userSignin;

// upload images local
const uploadFileHandler = async (e) => {
const file = e.target.files[0];

    const bodyFormData = new FormData();
    bodyFormData.append('imagen', file);
    setLoadingUpload(true);
    try {
      const { data } = await Axios.post('/api/uploads', bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      setImagen(data);
      setLoadingUpload(false);
    } catch (error) {
      setErrorUpload(error.message);
      setLoadingUpload(false);
    }

};

    <label htmlFor="imagen">Imagen:</label>
    <input
      id="imagen"
      type="text"
      placeholder="Imagen"
      value={imagen}
      onChange={(e) => setImagen(e.target.value)}
    ></input>

Respuesta exitosa (200 OK)

/uploads/182883728.jpg
