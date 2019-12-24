const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const index = require('./routes/index');
const server = require('http').createServer(app);
const io = require('socket.io')(server);


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

// view engine setup
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
    next()
})

app.use('/', index)

app.get('/krishna', function(req, res){
    res.status = 200
    res.json({'success':'yippie ye!!'})
})


io.on('connection', function(client) {
    console.log('Client connected...');

    client.on('join', function (data) {
        console.log(data);
        client.emit('messages', 'Hello from server');
    })
})


const port = 5000
server.listen(port, ()=> console.log(`running on port: ${port}`));



