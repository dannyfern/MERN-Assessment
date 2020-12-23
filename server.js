const express = require('express');
const connectDB = require('./config/db');

const app = express();

//CONNECTING THE DATABASE
connectDB();

//BODY PARSER
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

//ROUTES
app.use('/api/users', require('./routes/api/users'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/auth', require('./routes/api/auth'))



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server has started on ${PORT}...`));