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
            msg: "Post created "
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "An error has arisen in the process, please review"
        });
    }

});

//get users
export const getPosts = expressAsyncHandler(async (req, res) => {
    try {
        const sqlMakePosts = `SELECT * FROM posts`
        const posts = await db.query(sqlMakePosts);

        console.log(posts);
        res.status(200).send(posts);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "An error has arisen in the process, please review"
        });
    }
})