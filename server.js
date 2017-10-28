const express = require('express')

const app = express()
const path = require('path')

app.get('/', function(req, res) {
	res.sendFile(path.join(`${__dirname  }/public/index.html`))
})

app.use('/lib', express.static(`${__dirname  }/lib`))

app.listen(3000, function() {
	console.log('Please go to http://localhost:3000/ to start hacking!')
})
