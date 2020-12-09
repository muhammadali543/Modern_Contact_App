const express = require('express');
const app = express();
const jsonServer = require('json-server');
const server = jsonServer.create();
const dotenv = require('dotenv');
const path = require('path');
dotenv.config();

const router = jsonServer.router(path.join(__dirname, 'db.json'));
server.use(express.json());
server.use(router);

if(process.env.NODE_ENV === 'production'){
	app.use(express.static(path.join(__dirname, '/client/build')));
	app.get('*', (req,res) => 
	res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
	)
}

// set the port
const port = process.env.PORT || 3000;

// start the server
server.listen(port,() => {
  console.log(`App Server Listening at ${port}`);
});
