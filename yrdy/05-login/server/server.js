const express = require("express");
const passport = require("passport");
const session = require("express-session");
const cors = require("cors");
const { Pool } = require("pg");
const crypto = require("crypto");

const app = express();

// PostgreSQL 연결 설정
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "test00",
  password: "sufuzzy",
  port: 5432,
});

const secretKey = crypto.randomBytes(64).toString("hex");

// 미들웨어 설정
app.use(express.json());

// CORS 미들웨어 설정
const allowedOrigins = ["http://localhost:3000", "http://your-frontend-domain.com"];
app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg = "The CORS policy for this site does not allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: ["Authorization", "Content-Type"],
    credentials: true,
  })
);

app.use(
  session({
    secret: secretKey,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Passport 설정
require("./config/passport")(passport, pool);

// 라우트 설정
const authRoutes = require("./routes/auth");
app.use("/auth", authRoutes(pool));

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
