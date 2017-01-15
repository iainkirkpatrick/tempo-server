'use strict'

import app from './app'

const port = app.get('port')
const server = app.listen(port)

server.on('listening', () =>
  console.log(`Feathers / GraphQL application started on ${app.get('host')}:${port}`)
)
