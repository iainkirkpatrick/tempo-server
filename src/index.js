'use strict'

import app from './app'
const port = 3000 // app.get('port')
const server = app.listen(port)

server.on('listening', () =>
  console.log(`Feathers / GraphQL application started on localhost:${port}`)
)
