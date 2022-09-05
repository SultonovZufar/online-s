require('dotenv').config();

const express = require('express');
const app = express();
const indexRouter = require('./router/indexRouter');

let port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/', indexRouter);

app.listen(port, () => {
    console.log(`Server is running on PORT: ${port}`);
});