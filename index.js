import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import movies from './routes/movies.js'
import tv from './routes/tv.js'
import people from './routes/people.js'
import trending from './routes/trending.js'

const app = express()

dotenv.config()

app.use(cors())
app.use(express.json())

//("/api/movies")
//("/api/movies/:id")
app.use('/api/movies', movies)
//("/api/tv")
//("/api/tv/:id")
app.use('/api/tv', tv)
//("api/people")
//("api/people/:id")
app.use('/api/people', people)
//("/api/trending/:type")
app.use('/api/trending', trending)

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`)
})
