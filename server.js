'use strict';

var express = require('express');
var cors = require('cors');
var multer = require('multer')
var upload = multer({ dest: 'uploads/' })
var bodyParser = require('body-parser')

// require and use "multer"...

var app = express();
app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));
app.get(bodyParser.json())

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});

app.post('/api/fileanalyse',upload.single('upfile'),(req,res,next)=>{
  res.send({name:req.file.originalname,type:req.file.mimetype,size:req.file.size})
})

// , mimetype,size