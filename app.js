const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

const UserRouter = require('./routes/user-routes');
app.use('/user', UserRouter)

app.listen(5000, () => console.log('server is running at http://localhost:5000'))