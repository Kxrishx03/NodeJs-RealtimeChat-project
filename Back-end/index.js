const express = require("express");
require('dotenv').config();
const cors = require("cors");
const { default: axios } = require("axios");
const port = 3001;

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try{ 

    const reponse = await axios.put(
      'https://api.chatengine.io/users/',
      {username: username,secret:username,firstname:username},
      {headers:{"private-key":process.env.PRIVATE_KEY}}
    )

    return res.status(reponse.status).json(reponse.data);

  }catch(e){
      return res.status(e.response.status);
  }
  return res.json({ username: username, secret: "sha256..." });
});

app.listen(port,()=>{
    console.log("Running on: " + port);
});