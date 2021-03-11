// const chatModel = require("../model/Chat");
// const formResponse = require("../helper/formResponse");

// const chatController = {
//   getAlluser: (req, res) => {
//     chatModel
//     .getAlluser(req)
//     .then((result) => {
//       formResponse(result, res);
//     })
//     .catch((err) => {
//       formResponse(err, res);
//     });
//   },
//   addNewuser: (req, res) => {
//     console.log(req.body)
//     chatModel
//       .addNewuser(req.body)
//       .then((result, res) => {
//         formResponse(result, res);
//       })
//       .catch((err) => {
//         formResponse(err, res);
//       });
//     }
// };
// module.exports = chatController;