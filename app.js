const  express = require('express')

const tasks = require('./routes/tasks.js')
const connectDb = require('./db/connect')

//middleware (to access data )

app.use(express.json())

//routes
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
const app = express()
const port = 3000
app.use('/api/v1/tasks', tasks)

const start = async()=>{
try {
    
} catch (error) {
    
}

}