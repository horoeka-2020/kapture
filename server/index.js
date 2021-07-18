// Server and port configuration for the repo
const server = require('./server')
const { Client } = require('pg')

const port = process.env.PORT || 3000

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', port)
})
