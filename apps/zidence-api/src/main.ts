import * as express from 'express'
import * as cors from 'cors'
import * as morgan from 'morgan'

import users from './app/middlewares/users/route'
import properties from './app/middlewares/properties/route'
import addresses from './app/middlewares/addresses/route'

const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.send({ message: 'Root of Zidence API!' })
})

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to Zidence REST API!' })
})

app.get('/graphql', (req, res) => {
  res.send({ message: 'Welcome to Zidence GraphQL API!' })
})

app.use('/api/users', users)
app.use('/api/properties', properties)
app.use('/api/addresses', addresses)

app.get('/graphql', (req, res) => {
  res.send({ message: 'Zidence GraphQL API is not available yet' })
})

const port = process.env.PORT || 4000
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})

server.on('error', console.error)
