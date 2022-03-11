# Documentacion API rest InGamer

## ENDPOINTS

## USERS ENDPOINT

API users devuelve un array de objetos con todos los datos de cada usuario

## URL de Users

### Peticion GET

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

## Data:

## Users object

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

## USERS/ID ENDPOINT

devuelve un objetos con todos los datos del usuario

### Peticion GET

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

## USERS/REGISTER ENDPOINT

para utilizar este endpoint se necesita enviar un objeto contenido con los datos requeridos por la base de datos:

username: string
email: string
password: string
nickname: string

### Peticion POST

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

## USERS/LOGIN ENDPOINT

para utilizar este endpoint se necesita enviar un objeto contenido con los datos requeridos por la base de datos:

email: string
password: string

### Peticion POST

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

## USERS/PROFILE ENDPOINT

para utilizar este endpoint se necesita enviar un objeto contenido con los datos requeridos por la base de datos:

id: number
username: string
email: string
password: string
nickname: string

y adicionalmente se necesita un header de autorizacion con el token del usuario logueado

### Peticion PUT

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

## USERS/EDIT/ID ENDPOINT

para utilizar este endpoint se necesita especificar en el id en el end point y enviar un objeto contenido con los datos requeridos por la base de datos:

id: number
username: string
email: string
password: string
nickname: string

necesita un header de autorizacion con el token del usuario logueado

### Peticion PUT

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

## USERS/DELETE/ID ENDPOINT

para utilizar este endpoint se necesita especificar en el id en el end point

necesita un header de autorizacion con el token del usuario logueado

### Peticion PUT

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

## POSTS ENDPOINT

API posts devuelve un array de objetos con todos los datos de cada posts que han publicado los ususarios

necesita un header de autorizacion con el token del usuario logueado

## URL de Posts

### Peticion GET

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

## Data:

## Posts object

Estos objetos contienen una variedad de información referente a los posts publicados

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

## POSTS/ID ENDPOINT

devuelve un objetos con todos los datos del posts

necesita un header de autorizacion con el token del usuario logueado

### Peticion GET

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
  "id": 2,
  "user": {
  "userid": 3,
    "username": "prueba2",
    "avatar": null
  },
  "title": "update title",
  "description": "update description",
  "image": "https://picsum.photos/id/1/200/300",
  "posted": "2022-02-25T22:07:43.000Z",
  "likes": 654
}

## POSTS/USERPOSTS/ID ENDPOINT

devuelve un objetos con todos los datos del posts por usuario

### Peticion GET

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

## POSTS post ENDPOINT

para utilizar este endpoint se necesita enviar un objeto contenido con los datos requeridos por la base de datos:

userid: number
title: string
description: string
image: string
likes: number

### Peticion POST

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

## POSTS/EDIT/ID ENDPOINT

para utilizar este endpoint se necesita especificar en el id en el end point y enviar un objeto contenido con los datos requeridos por la base de datos:

title: string
description: string

### Peticion POST

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

## POSTS/DELETE/ID ENDPOINT

para utilizar este endpoint se necesita especificar en el id en el end point

necesita un header de autorizacion con el token del usuario logueado

### Peticion PUT

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

## UPLOADS ENDPOINT

API uploads devuelve un string de la url de la imagen o video que haya guardado el usuario

necesita un header de autorizacion con el token del usuario logueado

## URL de uploads



## UPLOADS/AVATAR ENDPOINT

### Peticion POST

api-ingamer.herokuapp.com/api/uploads/avatar

ejemplo utilizando react en el frontend:

const [loadingUpload, setLoadingUpload] = useState(false);
const [errorUpload, setErrorUpload] = useState('');

const userSignin = useSelector((state) => state.userSignin);

const { userInfo } = userSignin;

// upload images local
const uploadFileHandler = async (e) => {
const file = e.target.files[0];

    const bodyFormData = new FormData();
    bodyFormData.append('imagenAvatar', file);
    setLoadingUpload(true);
    try {
      const { data } = await Axios.post('/api/uploads/avatar', bodyFormData, {
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

https://api-ingamer.herokuapp.com/uploads/avatar/1646405965253.jpg

esta url es la que se envia en el campo de avatar para guardarla en la base de datos



## UPLOADS/BACKGROUNDUMGE ENDPOINT

### Peticion POST

api-ingamer.herokuapp.com/api/uploads/backgroundImage

ejemplo utilizando react en el frontend:

const [loadingUpload, setLoadingUpload] = useState(false);
const [errorUpload, setErrorUpload] = useState('');

const userSignin = useSelector((state) => state.userSignin);

const { userInfo } = userSignin;

// upload images local
const uploadFileHandler = async (e) => {
const file = e.target.files[0];

    const bodyFormData = new FormData();
    bodyFormData.append('imagenBackgroundImage', file);
    setLoadingUpload(true);
    try {
      const { data } = await Axios.post('/api/uploads/backgroundImage', bodyFormData, {
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

https://api-ingamer.herokuapp.com/uploads/backgroundImage/1646405965253.jpg

esta url es la que se envia en el campo de backgroundImage para guardarla en base date





## UPLOADS/POSTS ENDPOINT

### Peticion POST

api-ingamer.herokuapp.com/api/uploads/posts

ejemplo utilizando react en el frontend:

const [loadingUpload, setLoadingUpload] = useState(false);
const [errorUpload, setErrorUpload] = useState('');

const userSignin = useSelector((state) => state.userSignin);

const { userInfo } = userSignin;

//funcion para visualizar la imagen previamente
const [previewSource, setPreviewSource] = useState('');
const previewFile = (file) =>{
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = () =>{
    setPreviewSource(reader.result)
  }
}

// upload images local
const uploadFileHandler = async (e) => {
    const file = e.target.files[0];

    //previsualiza la imagen
    previewFile(file);


    const bodyFormData = new FormData();
    bodyFormData.append('imagenPosts', file);
    setLoadingUpload(true);
    try {
      const { data } = await Axios.post('/api/uploads/posts', bodyFormData, {
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

//imput para cargar la imagen

    <label htmlFor="imagen">Imagen:</label>
    <input
      id="imagen"
      type="text"
      placeholder="Imagen"
      value={imagen}
      onChange={(e) => setImagen(e.target.value)}
    ></input>

// para poder previsualizar la imagen antes de guardar

    {previewSource && (
      <img src={previewSource} alt="chosen" style={{width: '10rem', height: '10rem'}}></img>
    )}


// manejo de errores al subir la imagen

    {errorUpload && (
      <div>{errorUpload}</div>
    )}
Respuesta exitosa (200 OK)

https://api-ingamer.herokuapp.com/uploads/posts/1646405965253.jpg

esta url es la que se envia en el campo de image en las publicaciones para guardarla en base date


## COMMENTS ENDPOINT

para utilizar este endpoint se necesita enviar un objeto contenido con los datos requeridos por la base de datos:

postid:  string, es el id de la publicacion a la que se esta comentando
userid: string,  es el id del usuario logueado
comment: string, es lo que el usuario comenta en la publicaion




### Peticion POST

api-ingamer.herokuapp.com/api/comments

ejemplo

let url = "api-ingamer.herokuapp.com/api/comments";

let data = {
  "postid": 10,
  "userid": 3
  "comment": "que genial"
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
msg: "comment created"
}


## COMMENTS/COMMENTTOPOSTS/:POSTID ENDPOINT

para utilizar este endpoint se necesita enviar id de el comentario en el parametro

id: Numbrer

### Peticion GET

api-ingamer.herokuapp.com/api/commentToPosts/:id

ejemplo

let url = "api-ingamer.herokuapp.com/api/comments/commentToPosts/10";

fetch(url, {
method: 'GET',
headers:{
'Content-Type': 'application/json',
Authorization: `Bearer ${token}`
}
}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response));

Respuesta exitosa (201 OK)

[
    {
        "id": 4,
        "postid": 10,
        "userid": 3,
        "username": "updateImagen",
        "avatar": "https://i.pravatar.cc/300",
        "comment": "que genial",
        "posted": "2022-03-10T07:58:42.000Z",
        "likes": null
    },
    {
        "id": 5,
        "postid": 10,
        "userid": 3,
        "username": "updateImagen",
        "avatar": "https://i.pravatar.cc/300",
        "comment": "la estoy viendo",
        "posted": "2022-03-10T08:02:56.000Z",
        "likes": null
    },
    {
        "id": 8,
        "postid": 10,
        "userid": 4,
        "username": "prueba3",
        "avatar": null,
        "comment": "te vuelvo a comentar",
        "posted": "2022-03-10T08:23:53.000Z",
        "likes": null
    }
]


## COMMENTS/:ID ENDPOINT

para utilizar este endpoint se necesita enviar id de el comentario en el parametro

id: Numbrer

### Peticion GET

api-ingamer.herokuapp.com/api/comments/:id

ejemplo

let url = "api-ingamer.herokuapp.com/api/comments/4";

fetch(url, {
method: 'GET',
headers:{
'Content-Type': 'application/json',
Authorization: `Bearer ${token}`
}
}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response));

Respuesta exitosa (201 OK)

{
    id: 8,
    postid: 10,
    userid: 4,
    username: 'prueba3',
    avatar: null,
    comment: 'te vuelvo a comentar',
    posted: 2022-03-10T08:23:53.000Z,
    likes: 45
}


## COMMENTS/EDIT/:ID ENDPOINT

para utilizar este endpoint se necesita tener en cuenta el id del comentario  y  enviar un objeto contenido con los datos requeridos por la base de datos:

comment: string, es lo que el usuario comenta en la publicaion

### Peticion PUT

api-ingamer.herokuapp.com/api/comments/edit/:id

ejemplo

let url = "api-ingamer.herokuapp.com/api/comments/edit/2";

let data = {
  "comment": "superrr genial"
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
msg: "comment updated"
}

## comments/likes/:id ENDPOINT

para utilizar este endpoint se necesita tener en cuenta el id del comentario  y  enviar un objeto contenido con los datos requeridos por la base de datos:

comment: string, es lo que el usuario comenta en la publicaion

### Peticion PUT

api-ingamer.herokuapp.com/api/comments/likes/:id

ejemplo

let url = "api-ingamer.herokuapp.com/api/comments/likes/2";

let data = {
  "likes": 47
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
msg: "likes comment updated"
}

## comments/delete/:id ENDPOINT

para utilizar este endpoint se necesita enviar id de follower en el parametro

id: Numbrer

### Peticion DETELE

api-ingamer.herokuapp.com/api/comments/delete/:id

ejemplo

let url = "api-ingamer.herokuapp.com/api/comments/delete/2";

fetch(url, {
method: 'DETELE',
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
  msg: "comment removed successfully"
}


## followers ENDPOINT

para utilizar este endpoint se necesita enviar un objeto contenido con los datos requeridos por la base de datos:

userid: string,  es el id del usuario logueado
followerID: string, es el id del usuario que se va seguir




### Peticion POST

api-ingamer.herokuapp.com/api/followers

ejemplo

let url = "api-ingamer.herokuapp.com/api/followers";

let data = {
"userid": 3,
"followerID": 2
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
msg: "follower created"
}






## followers/:ID ENDPOINT

para utilizar este endpoint se necesita enviar id de el follower en el parametro

id: Numbrer

### Peticion GET

api-ingamer.herokuapp.com/api/followers/:id

ejemplo

let url = "api-ingamer.herokuapp.com/api/followers/2";

fetch(url, {
method: 'GET',
headers:{
'Content-Type': 'application/json',
Authorization: `Bearer ${token}`
}
}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response));

Respuesta exitosa (201 OK)

{
  "id": 2,
  "userid": 3,
  "followerID": 2,
  "username": "updateImagen",
  "nickname": " conimagen",
  "avatar": "https://i.pravatar.cc/300"
}





## followers/followerToUserid/:userid ENDPOINT

para utilizar este endpoint se necesita enviar userid de el usuario logueado en el parametro

devuelve todos los usuarios que siguen al usuario logueado

userid: Numbrer

### Peticion GET

api-ingamer.herokuapp.com/api/followers/followersToUserid/:userid

ejemplo

let url = "api-ingamer.herokuapp.com/api/followers/followersToUserid/3";

fetch(url, {
method: 'GET',
headers:{
'Content-Type': 'application/json',
Authorization: `Bearer ${token}`
}
}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response));

Respuesta exitosa (201 OK)

[
  {
    "id": 2,
    "userid": 3,
    "followerID": 2,
    "username": "updateImagen",
    "nickname": " conimagen",
    "avatar": "https://i.pravatar.cc/300"
  },
  {
    "id": 6,
    "userid": 3,
    "followerID": 8,
    "username": "updateImagen",
    "nickname": " conimagen",
    "avatar": "https://i.pravatar.cc/300"
  }
]


## followers/followingToUserid/:userid ENDPOINT

para utilizar este endpoint se necesita enviar userid de el usuario logueado en el parametro

devuelve todos los usuarios seguidos

userid: Numbrer

### Peticion GET

api-ingamer.herokuapp.com/api/followers/followingToUserid/:userid

ejemplo

let url = "api-ingamer.herokuapp.com/api/followers/followingToUserid/2";

fetch(url, {
method: 'GET',
headers:{
'Content-Type': 'application/json',
Authorization: `Bearer ${token}`
}
}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response));

Respuesta exitosa (201 OK)

[
  {
    "id": 2,
    "userid": 3,
    "followerID": 2,
    "username": "updateImagen",
    "nickname": " conimagen",
    "avatar": "https://i.pravatar.cc/300"
  },
  {
    "id": 6,
    "userid": 3,
    "followerID": 8,
    "username": "updateImagen",
    "nickname": " conimagen",
    "avatar": "https://i.pravatar.cc/300"
  }
]


## followers/delete/:id ENDPOINT

para utilizar este endpoint se necesita enviar id de follower en el parametro

id: Numbrer

### Peticion DETELE

api-ingamer.herokuapp.com/api/followers/delete/:id

ejemplo

let url = "api-ingamer.herokuapp.com/api/followers/delete/3";

fetch(url, {
method: 'DETELE',
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
  msg: "follower removed successfully"
}


/recomendaciones crear un hook o redux para el estado de follower 
/crear un componente follower que sea un boton para seguir y dejar de seguir a los usuarios, aqui un breve ejemplo de como se podria implementar

  const followfollower = () => {
    //ToDo hook o redux para enviar los seguidos a la base de datos
  }

  const followers = () => {
    //ToDo hook o redux para traer (get) los amigos seguidos por id
  }

import React, { useState } from "react";
import usefollower from "hooks/usefollower";



export default function Followfollower({ id }) {
  const { followfollower, followers } = usefollower();


// se compara el follower traido de la base de datos con el que se selecciono para verificar si se sigue o no en el momento

  const isFollowed = followers.some((followerId) => followersId === id);

//click en el boton de seguir para agregar el amigo a la base de datos
  const handleClick = () => {
    followfollower({ id });
  };

  
  // implementar estado que verifique si esta seguido o no el usuario
  const [label, emoji] = isFollowed
    ? ["Stop following", "❌"]
    : ["follow", "❤️"];


//renderisar boton de seguir
  return (

    <>
      <button onClick={handleClick}>
        <span aria-label={label} role="img">
          {emoji}
        </span>
      </button>
    </>

  );
}