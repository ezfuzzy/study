const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const User = require('../models/user');

module.exports = function(passport, pool) {
  passport.use(new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
    try {
      const user = new User(pool);
      const foundUser = await user.findByEmail(email);
      if (!foundUser) {
        return done(null, false, { message: '해당 이메일의 사용자가 존재하지 않습니다.' });
      }

      const isMatch = await bcrypt.compare(password, foundUser.password);
      if (isMatch) {
        return done(null, foundUser);
      } else {
        return done(null, false, { message: '비밀번호가 일치하지 않습니다.' });
      }
    } catch (error) {
      return done(error);
    }
  }));

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = new User(pool);
      const foundUser = await user.findById(id);
      done(null, foundUser);
    } catch (error) {
      done(error);
    }
  });
};