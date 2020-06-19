const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const passport = require('passport');

global.__basedir = __dirname;
// var dash = require('appmetrics-dash').attach();

//Init the app
const app = express();
app.use(require('express-status-monitor')());

//Middlewares
// Form Data Middleware
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

// Json Body Middleware
app.use(bodyParser.json());

// Cors Middleware
app.use(cors());

// Setting up the static directory
app.use(express.static(path.join(__dirname, 'public')));

// Use the passport Middleware
app.use(passport.initialize());
// Bring in the Passport Strategy
require('./config/passport')(passport);

// Bring in the Database Config and connect with the database
const db = require('./config/keys').mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log(`Database connected successfully ${db}`);
  })
  .catch((err) => console.log(`Unable to connect with the database ${err}`));

app.use(express.static(__dirname + '/public'));

const auth = require('./routes/api/auth');
app.use('/api/users', auth);
const profile = require('./routes/api/profile');
app.use('/api/profile', profile);
const project = require('./routes/api/project');
app.use('/api/project', project);
const comment = require('./routes/api/comment');
app.use('/api/comment', comment);
const frontpage = require('./routes/api/frontpage');
app.use('/api/frontpage', frontpage);
const editor = require('./routes/api/editor');
app.use('/api/editor', editor);

app.use((err, req, res, next) => {
  if (err.code == 'INCORRECT_FILETYPE') {
    res.status(422).json({ error: 'Only images are allowed' });
    return;
  }
  if (err.code == 'LIMIT_FILE_SIZE') {
    res.status(422).json({ error: 'Allowed file size is 500KB' });
    return;
  }
});

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public/index.html'));
// });

// Bring in the Captcha route
// const captcha = require('./routes/captcha');
// app.use('/captcha', captcha);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
