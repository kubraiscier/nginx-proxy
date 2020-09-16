var express = require('express');
var cors = require('cors');
var os = require('os');

const PORT = 5000;
var app = express();
app.use(cors());

app.get('*', function(req,res) {
   res.json({server_name: os.hostname(), your_ip: req.connection.remoteAddress})
})

app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));