const session = require('express-session');
const { PrismaSessionStore } = require('@quixo3/prisma-session-store');
const { prisma } = require('./request');

module.exports = session({
  secret: 'top secret',
  resave: false,
  saveUninitialized: false,
  rolling: true,
  cookie: {
    secure: false,
    httpOnly: true,
    sameSite: true,
    maxAge: 7 * 24 * 60 * 60 * 1000,
  },
  store: new PrismaSessionStore(
    prisma,
    {
      checkPeriod: 60 * 60 * 1000,  //ms
      dbRecordIdIsSessionId: true,
      dbRecordIdFunction: undefined,
    }
  )
})
