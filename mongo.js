const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://magongorafleitas:${password}@cluster0.rmgy5ks.mongodb.net/noteApp?retryWrites=true&w=majority&appName=Cluster0`

mongoose.set('strictQuery',false)

mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)
/*
const note = new Note({
  content: 'HTML is easy',
  important: true,
})

const note2 = new Note({
    content: 'Mongoose majes things easy',
    important: true,
})

const note3 = new Note({
    content: 'CSS is hard',
    important: true,
})

note.save().then(result => {
  console.log('note saved!')
  //mongoose.connection.close()
})

note2.save().then(result => {
  console.log('note saved!')
  //mongoose.connection.close()
})

note3.save().then(result => {
  console.log('note saved!')
  mongoose.connection.close()
})
*/
Note.find({}).then(result => {
    result.forEach(note => {
      console.log(note)
    })
    mongoose.connection.close()
})