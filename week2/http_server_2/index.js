const express = require('express')
const app = express()
const bodyParser=require ('body-parser');
const port= process.env.PORT || 3000;

app.use(bodyParser.json());
app.post('/converstaion', function (req, res) {
    console.log(req.body )
    const qMessage = req.query;
    console.log(qMessage)
  res.send('<b>Hello World<b>')
})

app.listen(port)