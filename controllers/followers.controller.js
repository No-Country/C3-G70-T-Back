import expressAsyncHandler from 'express-async-handler';
import db from '../mysqlConnection/mysqlConnection.js';




//create follower 
export const createfollower = expressAsyncHandler(async (req, res) => {

  const { userid, followerID } = req.body;

  try {

    //check if the user already exists
    const sqlMakeUser_select = `SELECT * FROM followers WHERE userid = '${userid}' && followerID = '${followerID}'`;
    const follower = await db.query(sqlMakeUser_select);
    console.log(follower);
    if (follower.length > 0) {
      return res.status(400).json({
        ok: false,
        msg:  `follower already exist` 
      });
    }


    const sqlMakefollower_into = `INSERT INTO followers ( userid, followerID ) VALUES ( '${userid}', '${followerID}')`;
    await db.query(sqlMakefollower_into);

    // status code 201  if all goes well, return ok: true
    res.status(201).json({
      ok: true,
      msg: "follower created"
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "An error has arisen in the process, please review"
    });
  }

});


//get follower to id
export const getfollowerToId = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const sqlMakefollower = `SELECT  F.id, F.userid, F.followerID, U.username, U.nickname, U.avatar FROM followers as F INNER JOIN users as U WHERE  F.id = '${id}' &&  F.userid=U.id`
    const follower = await db.query(sqlMakefollower);
    console.log(follower[0]);
    if (follower[0]) {

      res.status(200).json(follower[0]);
    } else {
      res.status(404).json({
        ok: false,
        msg: "follower not found"
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


//get all followers to user
export const getAllfollowersToUserId = expressAsyncHandler(async (req, res) => {
  const { userid } = req.params;

  try {
    const sqlMakefollower = `SELECT  F.id, F.userid, F.followerID, U.username, U.nickname, U.avatar FROM followers as F INNER JOIN users as U  WHERE  F.followerID = '${userid}' && F.userid=U.id`
    const follower = await db.query(sqlMakefollower);
    console.log(follower);
    if (follower) {
      res.status(200).json(follower);
    } else {
      res.status(404).json({
        ok: false,
        msg: "follower not found"
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

//get all followeds to user
export const getAllfollowingToUserId = expressAsyncHandler(async (req, res) => {
  const { userid } = req.params;

  try {
    const sqlMakefollower = `SELECT  F.id, F.userid, F.followerID, U.username, U.nickname, U.avatar FROM followers as F INNER JOIN users as U  WHERE  F.userid = '${userid}' && F.userid=U.id`
    const follower = await db.query(sqlMakefollower);
    console.log(follower);
    if (follower) {
      res.status(200).json(follower);
    } else {
      res.status(404).json({
        ok: false,
        msg: "follower not found"
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

//delete follower
export const deletefollower = expressAsyncHandler(async (req, res) => {
  try {

    const { id } = req.params;

    // select query
    const sqlMakefollower_select = `SELECT * FROM followers WHERE id = '${id}'`;
    const follower = await db.query(sqlMakefollower_select);


    // delete query
    const sqlMakeUser_delete = `DELETE FROM followers WHERE id = '${id}'`
    console.log(follower);
    if (follower[0]) {
      await db.query(sqlMakeUser_delete);
      res.status(201).json({
        ok: true,
        msg: "follower removed successfully"
      });
    } else {
      res.status(404).json({
        ok: false,
        msg: "follower not exist"
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
