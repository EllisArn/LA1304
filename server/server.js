const mongoose = require('mongoose')
const express = require('express')

const app = express()

mongoose.set('strictQuery', false)

mongoose
  .connect(
    'mongodb+srv://ellisarn:SilleNra2005@freecluster.vquf0xo.mongodb.net/LA1304?retryWrites=true&w=majority'
  )
  .then(() => {
    console.log('Connected to database')

    app.listen(3000, () => {
      console.log('Server started on port 3000')
    })

    const hauptstadtShema = new mongoose.Schema({
      Kontinent: [
        {
          land: String,
          hauptstadt: String,
        },
      ],
    })

    const Hauptstadt = mongoose.model('Kontinent', hauptstadtShema)

    console.log(Hauptstadt.find({ 'Kontinent.land': 'Deutschland' }))
  })
