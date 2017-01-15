import feathers from 'feathers'
import bodyParser from 'body-parser'

import services from './services'

const PORT = 3000

const app = feathers()
app.use(bodyParser.json())
  .configure(services)

export default app
