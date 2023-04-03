const connectToMongo = require('./DB');
const express = require('express')

/* Connecting to the MongoDB database. */
connectToMongo();

/* *|MARKER_CURSOR|* */
const app = express()
const port = 5000
app.use(express.json())

// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))


app.get('/', (req, res) => {
  res.send('ksakai Mandali!')
})

/* Listening to the port 5000. */
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

