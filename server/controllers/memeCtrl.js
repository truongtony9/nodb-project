const axios = require("axios");

let meme = [];
let newid = 0;

axios.get("https://api.imgflip.com/get_memes").then(response => {
  const a = response.data.data;
  // console.log(response.data.data);
  const memeIds = a.memes.map(item => {
    item.newid = newid;
    newid++;
    return item;
  });
  meme = memeIds;
});

const getMeme = (req, res, next) => {
  res.status(200).json(meme);
};

const createMsg = (req, res, next) => {
  const { input } = req.body;
  console.log(meme);
  let newMsg = input;
  res.status(200).json(newMsg);
};

const updateMsg = (req, res, next) => {
  const { newid } = req.params;
  const { input } = req.body;
  let indexMsg = meme.findIndex(meme => meme.newid == newid);
  meme[indexMsg].name = input;
  res.status(200).json(meme[indexMsg].name);
};

const deleteImg = (req, res, next) => {
  const { newid } = req.params;
  let memeIndex = meme.findIndex(meme => meme.newid == newid);
  meme.splice(memeIndex, 1);
  res.status(200).json(meme);
};

module.exports = {
  getMeme,
  deleteImg,
  createMsg,
  updateMsg
};
