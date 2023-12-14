const express = require('express');
const connection = require('./database/connection');
const userRoutes = require('./routes/userRoutes')
const dotenv = require('dotenv')
const cors = require('cors')

const app = express();
app.use(express.json())
app.use(cors())

dotenv.config();

connection();

app.use('/api/users',userRoutes);

app.listen(process.env.PORT,() => {
    console.log(`Port Running on ${process.env.PORT}.`)
});