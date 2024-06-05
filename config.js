require('dotenv').config()

module.exports = {
  server: {
    port: process.env.PORT || 1337
  },
  redis: {
    host: process.env.REDIS_HOST || 'localhost',
    port: process.env.REDIS_PORT || 6379,
    password: process.env.REDIS_PASSWORD,
    ...(process.env.NODE_ENV === 'test' ? { fast: true } : {})
  }
}
