const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())
const port = process.env.PORT || 5000

const mongoURI = process.env.MONGODB_URI || require('./config/keys').MONGODB_URI
mongoose.connect(mongoURI, {useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log("MongoDB connection successful")
})
.catch(err => console.log(err))

const kekkei_genaki = require('./routes/api/kekkei_genkai')
const chakra_natures = require('./routes/api/chakra_natures')
const tools = require('./routes/api/tools')
const clans = require('./routes/api/clans')
const characters = require('./routes/api/characters')
const teams = require('./routes/api/teams')
const villages = require('./routes/api/villages')


app.use('/api/kekkei_genkai', kekkei_genaki)
app.use('/api/chakra_natures', chakra_natures)
app.use('/api/tools', tools)
app.use('/api/clans', clans)
app.use('/api/characters', characters)
app.use('/api/teams', teams)
app.use('/api/villages', villages)

app.listen(port, () => {
    console.log(`server started at port: ${port}`)
})