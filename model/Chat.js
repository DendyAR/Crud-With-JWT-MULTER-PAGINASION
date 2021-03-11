const { database } = require("../helper/connector");
const db = require("../helper/connector");

const chatModel = {
  getAlluser: () => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM chat`, (err, result) => {
        if (!err) {
          resolve(result.rows);
        } else {
          reject({
            message: `get all users failed`,
            statusCode: 500,
            data: [],
          });
        }
      });
    });
  },
  addNewuser: (req) => {
    const { id, username, email, password, phone, images, bio } = req;
    return new Promise((resolve, reject) => {
      db.query(
        `INSERT INTO (id, username, email, password, phone, images, bio) VALUES=(${parseInt(id)},'${username}' ,'${name}', '${email}','${password}', ${parseInt(phone)}, '${images}', '${bio}')`,
        (err, result) => {
          console.log(err);
          console.log(result)
          if (!err) {
            resolve(result.rows);
          } else {
            reject({
              message: `add new users failed`,
              statusCode: 500,
              data: [],
            });
          }
        }
      );
    });
  },
  getUser: () => {},
  updateuser: () => {},
  deletUser: () => {},
};

module.exports = chatModel;
