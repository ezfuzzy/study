const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const User = require('../models/user');

module.exports = (pool) => {
  const router = express.Router();

  router.post('/signup', async (req, res) => {
    try {
      const { email, password, username } = req.body;
      console.log('Received signup request:', email, password);
      const user = new User(pool);
      const existingUser = await user.findByEmail(email);
      if (existingUser) {
        return res.status(400).json({ message: '이미 존재하는 이메일입니다.' });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      await user.create(email, hashedPassword, username);
      res.status(201).json({ message: '회원가입 성공' });
    } catch (error) {
      res.status(500).json({ message: '회원가입 실패', error: error.message });
    }
  });

  router.post('/signin', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.status(400).json({ message: info.message });
      }
      req.logIn(user, (err) => {
        if (err) {
          return next(err);
        }
        return res.json({ message: '로그인 성공', user });
      });
    })(req, res, next);
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
    console.log('Checking user authentication...');
    if (req.isAuthenticated()) {
      console.log('Authenticated user:', req.user);
      res.json({ user: req.user });
    } else {
      console.log('Unauthenticated user');
      res.status(401).json({ message: '인증되지 않은 사용자' });
    }
  });

  return router;
};