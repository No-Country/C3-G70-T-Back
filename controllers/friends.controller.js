import expressAsyncHandler from 'express-async-handler';
import db from '../mysqlConnection/mysqlConnection.js';




//create friend 
export const createFriend = expressAsyncHandler(async (req, res) => {

  const { userid, friend, username, nickname, avatar } = req.body;

  try {

    //check if the user already exists
    const sqlMakeUser_select = `SELECT * FROM friends WHERE userid = '${userid}' && friend = '${friend}'`;
    let user = await db.query(sqlMakeUser_select);
    console.log(user);
    if (user.length > 0) {
      return res.status(400).json({
        ok: false,
        msg:  `${username} already you friend` 
      });
    }


    const sqlMakefriend_into = `INSERT INTO friends ( userid, friend, username, nickname, avatar) VALUES ( '${userid}', '${friend}', '${username}', '${nickname}','${avatar}')`;
    await db.query(sqlMakefriend_into);

    // status code 201  if all goes well, return ok: true
    res.status(201).json({
      ok: true,
      msg: "friend created"
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "An error has arisen in the process, please review"
    });
  }

});


//get friend to id
export const getFriendToId = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const sqlMakefriend = `SELECT  F.id, F.userid, F.friend, U.username, U.nickname, U.avatar FROM friends as F INNER JOIN users as U ON  F.id = '${id}'`
    const friend = await db.query(sqlMakefriend);
    console.log(friend[0]);
    if (friend[0]) {

      const { id: idDB, userid: useridDB, friend: friendDB, username: usernameDB, nickname: nicknameDB, avatar: avatarDB } = friend[0];

      res.status(200).json({
          id: idDB,
          userid: useridDB,
          friend: friendDB,
          user: {
            username: usernameDB,
            nickname: nicknameDB,
            avatar: avatarDB
          }  
      });
    } else {
      res.status(404).json({
        ok: false,
        msg: "friend not found"
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


//get all friends to user
export const getAllFriendToUserId = expressAsyncHandler(async (req, res) => {
  const { userid } = req.params;

  try {
    const sqlMakefriend = `SELECT  F.id, F.userid, F.friend, U.username, U.nickname, U.avatar FROM friends as F INNER JOIN users as U  WHERE  F.userid = '${userid}' AND F.userid=U.id`
    const friend = await db.query(sqlMakefriend);
    console.log(friend);
    if (friend) {
      res.status(200).json(friend);
    } else {
      res.status(404).json({
        ok: false,
        msg: "friend not found"
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



//delete friend
export const deletefriend = expressAsyncHandler(async (req, res) => {
  try {

    const { id } = req.params;

    // select query
    const sqlMakefriend_select = `SELECT * FROM friends WHERE id = '${id}'`;
    const friend = await db.query(sqlMakefriend_select);


    // delete query
    const sqlMakeUser_delete = `DELETE FROM friends WHERE id = '${id}'`
    console.log(friend);
    if (friend[0]) {
      await db.query(sqlMakeUser_delete);
      res.status(201).json({
        ok: true,
        msg: "friend removed successfully"
      });
    } else {
      res.status(404).json({
        ok: false,
        msg: "friend not exist"
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
