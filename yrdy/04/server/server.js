const express = require('express');
const passport = require('passport');
const session = require('express-session');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();

// PostgreSQL 연결 설정
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'test00',
  password: 'sufuzzy',
  port: 5432,
});

// 미들웨어 설정
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(session({
  secret: 'your_session_secret',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// Passport 설정
require('./config/passport')(passport, pool);

// 라우트 설정
app.use('/auth', require('./routes/auth'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));