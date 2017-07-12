const express = require('express');
const app = express()
const path = require('path');
const bodyParser = require('body-parser');

import users from './ROUTES/users'

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(express.static('public'))
app.use('/api/users', users)


app.get('/*', (req, res)=>{
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})
app.listen(3000, ()=>{
  console.log(`server running`);
})
