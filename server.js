const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const routes = require('./routes/api');

const app = express();
app.use(cors());
const PORT = process.env.PORT || 8080;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/contact_app', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!!');
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}


app.use(morgan('tiny'));
app.use('/api', routes);

app.listen(PORT,() => {
  console.log(`App Server Listening at ${PORT}`);
});
