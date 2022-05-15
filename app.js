require('./db/connect')
const  express = require('express')
const app = express()
const port = 3000
const tasks = require('./routes/tasks.js')

//middleware (to access data )

app.use(express.json())

//routes
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))


app.use('/api/v1/tasks', tasks)
