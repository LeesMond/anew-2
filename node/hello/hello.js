var express = require('express')
var app = express()

app.get('/', function (req, res) {
<<<<<<< HEAD
	res.send("Hello Node JS~! !!")
=======
	res.send("Hello Node JS~!!!")
>>>>>>> b581ad33c519787b775ec308199491615342c97a
})

app.listen(3000, function() {
	console.log("3000 Port : Server Started~!!");
})
