const connectToMongo = require('./DB');
const express = require('express')
var cors = require("cors");

/* Connecting to the MongoDB database. */
connectToMongo();

/* *|MARKER_CURSOR|* */
const app = express()
app.use(cors());
const port = 5000
app.use(express.json())

// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/news', require('./routes/news'))


app.get('/', (req, res) => {
  res.send('ksakai Mandali!')
})

/* Listening to the port 5000. */
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

