import supertest from 'supertest';
import app from '../../server/app';
import db from '../../mysqlConnection/mysqlConnection.js';


export const api = supertest(app);


/////posts


//create post
export const newPost = {
  userid: 1,
  title: "Mira mi ultima jugada",
  description: "Estaba jugando con @juanito y de repente se me aparecio esto:",
  image: "https://picsum.photos/id/1/200/300",
  likes: 654
}




//Delete all register
export const deleteAllPostsDB = () => {
  const judgmentQuery = `DELETE FROM posts`;
  db.query(judgmentQuery);
}


//get all users
export const getAllPostsDB = async () => {
  try {
    const sqlMakePost = `SELECT * FROM posts`
    const posts = await db.query(sqlMakePost);

    console.log(posts);
    return posts

  } catch (error) {
    console.log(error);
  }
}



