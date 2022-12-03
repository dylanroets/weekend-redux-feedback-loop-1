const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
//need for post to occur in server and not in router
let pool = require('./modules/pool.js');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
//POST request at '/Feedback'
app.post('/Feedback', (req, res) => {
  console.log('connected to server:', req.body.data);
  let incomingData = req.body.data;
  let queryText = ` 
  INSERT INTO "feedback" 
  ("feeling", "understanding", "support", "comments")
  VALUES 
  ($1, $2, $3, $4)`;
  let feeling = incomingData.Feeling;
  let supported = incomingData.Supported;
  let understanding = incomingData.Understanding;
  let comments = incomingData.Comments;
  pool
    .query(queryText, [feeling, understanding, supported, comments])
    .then((result) => res.sendStatus(201))
    .catch((result) => res.sendStatus(500));
});

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
  console.log('Listening on port: ', PORT);
});
