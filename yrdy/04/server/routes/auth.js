const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const User = require('../models/user');

module.exports = (pool) => {
  const router = express.Router();

  router.post('/signup', async (req, res) => {
    try {
      const { email, password, username } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User(pool);
      await newUser.create(email, hashedPassword, username);
      res.status(201).json({ message: '회원가입 성공' });
    } catch (error) {
      res.status(500).json({ message: '회원가입 실패', error: error.message });
    }
  });

  router.post('/signin', passport.authenticate('local'), (req, res) => {
    res.json({ message: '로그인 성공', user: req.user });
  });

  router.get('/logout', (req, res) => {
    req.logout((err) => {
      if (err) {
        return res.status(500).json({ message: '로그아웃 실패', error: err.message });
      }
      res.json({ message: '로그아웃 성공' });
    });
  });

  router.get('/user', (req, res) => {
    if (req.isAuthenticated()) {
      res.json({ user: req.user });
    } else {
      res.status(401).json({ message: '인증되지 않은 사용자' });
    }
  });

  return router;
};