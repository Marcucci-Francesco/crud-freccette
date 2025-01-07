const express = require('express')
const partecipantsRouter = require('./router/partecipants');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Server dei partecipanti')
})

app.use('/partecipants', partecipantsRouter)

app.listen(port, () => {
  console.log('Sono in ascolto sulla porta 3000');  
})




