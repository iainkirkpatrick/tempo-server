import feathers from 'feathers'
import rest from 'feathers-rest'
import bodyParser from 'body-parser'

import services from './services'

const PORT = 3000

const app = feathers()
app.use(bodyParser.json())
  .configure(rest())
  .configure(services)

export default app
