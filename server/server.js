const mongoose = require('mongoose')
const express = require('express')

const app = express()

app.get('/europe/:id', async (req, res) => {
  const { id } = req.params

  const question = await question.findById(id)

  res.json(question)
})

mongoose.set('strictQuery', false)

mongoose
  .connect(
    'mongodb+srv://LA1304-server:DKyec3UHULGCMFSG@freecluster.vquf0xo.mongodb.net/LA1304?retryWrites=true&w=majority'
  )
  .then(() => {
    console.log('Connected to database')

    app.listen(3000, () => {
      console.log('Server started on port 3000')
    })

    const datenSchema = new mongoose.Schema({
      kontinent: String,
      land: String,
      hauptstadt: String,
    })

    const Welt = mongoose.model('country', datenSchema)

    Welt.find({}, (err, data) => {
      if (err) {
        console.error(err)
      } else {
        console.log(data)
      }
    })
  })
