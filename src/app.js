import cors from 'cors'
import compress from 'compression'
import feathers from 'feathers'
import hooks from 'feathers-hooks'
import rest from 'feathers-rest'
import bodyParser from 'body-parser'

import services from './services'

const PORT = 3000

const app = feathers()
app.use(compress())
  .options('*', cors())
  .use(cors())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .configure(hooks())
  .configure(rest())
  .configure(services)

export default app
