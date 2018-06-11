const express = require("express");
const bodyParser = require("body-parser");
const mc = require("./controllers/memeCtrl");
const app = express();
const port = 3001;

app.use(bodyParser.json());

app.get("/api/meme/newid", mc.getMeme);
app.delete("/api/meme/:newid", mc.deleteImg);
app.post("/api/meme", mc.createMsg);
app.put("/api/meme/:newid", mc.updateMsg);

app.listen(port, () => {
  console.log(`Server is listening ${port}`);
});
