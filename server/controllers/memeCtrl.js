const axios = require("axios");

let meme = [];
let newid = 0;

axios.get("https://api.imgflip.com/get_memes").then(response => {
  const a = response.data.data;
  // console.log(response.data.data);
  const memeIds = a.memes.map(obj => {
    obj.newid = newid;
    newid++;
    return obj;
  });
  meme = memeIds;
});

const getMeme = (req, res, next) => {
  res.status(200).json(meme);
};

// const createTopMsg
// const createBotMsg
// const deleteTopMsg
// const deleteBotMsg
// const updateTopMsg
// const updateBotMsg

module.exports = {
  getMeme
};
