const express = require('express');
const app = express();
const server = require('http').Server(app);

const cors = require('cors');
const bodyParser = require('body-parser');
// const socket = require('./socket');
const db = require('./db');
const router = require('./network/routes');

db('mongodb+srv://francisDB:jivjwx7o4WmbFB4Y@fmh.y5jxo10.mongodb.net/?retryWrites=true&w=majority&appName=FMH');

// mongodb+srv://francisDB:jivjwx7o4WmbFB4Y@cluster0.jhbxebe.mongodb.net/?retryWrites=true&w=majority

app.use(cors());

app.use(bodyParser.json());
// socket.connect(server);
app.use(express.static('public'));

router(app);

server.listen(3000, ()=> {
    console.log('la aplicacion esta escuchando en localhost:3000')
});
