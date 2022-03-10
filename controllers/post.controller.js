import expressAsyncHandler from 'express-async-handler';
import db from '../mysqlConnection/mysqlConnection.js';




//create post 
export const createPost = expressAsyncHandler(async (req, res) => {

  const { userid, title, description, image, likes } = req.body;

  try {
    const sqlMakePost_into = `INSERT INTO posts ( userid, title, description, image, likes) VALUES ( '${userid}',  '${title}', '${description}','${image}','${likes}')`;
    await db.query(sqlMakePost_into);

    // status code 201  if all goes well, return ok: true
    res.status(201).json({
      ok: true,
      msg: "Post created"
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "An error has arisen in the process, please review"
    });
  }

});

//get posts
export const getPosts = expressAsyncHandler(async (req, res) => {
  
  try {
    const sqlMakePosts = `SELECT  P.id, P.userid, U.username, U.avatar, P.title, P.description, P.image, P.posted, P.likes FROM posts as P INNER JOIN users as U WHERE P.userid=U.id`
    const posts = await db.query(sqlMakePosts);

    console.log(posts);

    if (posts.length > 0) {
      res.status(200).send(posts);
    } else {
      res.status(400).json({
        ok: false,
        msg: "No Posts"
      });
    }

  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "An error has arisen in the process, please review"
    });
  }
})

//get post to id
export const getPostToId = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const sqlMakePost = `SELECT  P.id, P.userid, U.username, U.avatar, P.title, P.description, P.image, P.posted, P.likes FROM posts as P INNER JOIN users as U WHERE  P.id = '${id}' && P.userid=U.id`
    const post = await db.query(sqlMakePost);
    console.log(post[0]);
    if (post[0]) {

      const { id: idDB, userid: useridDB, username: usernameDB, avatar: avatarDB, title: titleDB, description: descriptionDB, image: imageDB, posted: postedDB, likes: likesDB } = post[0];

      res.status(200).json({
        id: idDB,
        user: {
          userid: useridDB,
          username: usernameDB,
          avatar: avatarDB
        },
        title: titleDB,
        description: descriptionDB,
        image: imageDB,
        posted: postedDB,
        likes: likesDB
      });
    } else {
      res.status(404).json({
        ok: false,
        msg: "Post not found"
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "An error has arisen in the process, please review"
    });
  }
});


//get all posts to user
export const getAllPostToUserId = expressAsyncHandler(async (req, res) => {
  const { userid } = req.params;

  try {
    const sqlMakePost = `SELECT  P.id, P.userid, U.username, U.avatar, P.title, P.description, P.image, P.posted, P.likes FROM posts as P INNER JOIN users as U WHERE  P.userid = '${userid}' && P.userid=U.id`
    const post = await db.query(sqlMakePost);
    console.log(post);
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({
        ok: false,
        msg: "Post not found"
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "An error has arisen in the process, please review"
    });
  }
});


//edite post
export const editPost = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;

  try {

    // query to mysql DB 
    const sqlMakePost = `SELECT * FROM posts WHERE id = '${id}'`
    const post = await db.query(sqlMakePost);
    console.log(post[0])

    // data from mysql DB
    const { title: titleDB, description: descriptionDB } = post[0];


    // data from require body
    const { title, description } = req.body;


    if (post[0]) {
      const updatedPosttoDB = {
        title: title || titleDB,
        description: description || descriptionDB
      }

      await db.query('UPDATE posts set ? WHERE id = ?', [updatedPosttoDB, id]);
      res.status(201).json({
        ok: true,
        msg: "Post updated successfully"
      });
    } else {
      res.status(404).json({
        ok: false,
        msg: "Post not found"
      });
    };
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "An error has arisen in the process, please review"
    });
  }
});

// update likes
export const likesPost = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;

  try {

    // query to mysql DB 
    const sqlMakePost = `SELECT * FROM posts WHERE id = '${id}'`
    const post = await db.query(sqlMakePost);

    // data from mysql DB
    const { likes: likesDB } = post[0];


    // data from require body
    const { likes } = req.body;


    if (post[0]) {
      const updatedPosttoDB = {
        likes: likes || likesDB,
      }

      await db.query('UPDATE posts set ? WHERE id = ?', [updatedPosttoDB, id]);
      res.status(201).json({
        ok: true,
        msg: "Post updated successfully"
      });
    } else {
      res.status(404).json({
        ok: false,
        msg: "Post not found"
      });
    };
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "An error has arisen in the process, please review"
    });
  }
});

//delete post
export const deletePost = expressAsyncHandler(async (req, res) => {
  try {

    const { id } = req.params;

    // select query
    const sqlMakePost_select = `SELECT * FROM posts WHERE id = '${id}'`;
    const post = await db.query(sqlMakePost_select);


    // delete query
    const sqlMakeUser_delete = `DELETE FROM posts WHERE id = '${id}'`
    console.log(post);
    if (post[0]) {
      await db.query(sqlMakeUser_delete);
      res.status(201).json({
        ok: true,
        msg: "Post removed successfully"
      });
    } else {
      res.status(404).json({
        ok: false,
        msg: "Post not exist"
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "An error has arisen in the process, please review"
    });
  }
});
