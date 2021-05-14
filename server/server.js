const express = require('express');
const connectDB = require('./config/db')
const morgan = require('morgan')
const cors = require('cors')
const {readdirSync}= require('fs')
const app = express();

//Connect Database
connectDB();
// middleware 
app.use(morgan('dev'));
app.use(express.json({extended: false})) // before bodyParser.json
app.use(cors());

app.get('/', (req, res) => res.send('API Running'));

readdirSync('./routes').map((r) =>
    app.use('/api',require('./routes/' + r))
)

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>console.log(`server started on port ${PORT}`));