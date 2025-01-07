const partecipanti = require('../data/partecipants');

const index = (req, res) => {
  console.log(req.query);

  let listaPartecipanti = partecipanti;

  if (req.query.status) {
    listaPartecipanti = partecipanti.filter(partecipante => partecipante.status === req.query.status)
  }
  
  res.json(listaPartecipanti)
}

const show = (req, res) => {

  const partecipante = partecipanti.find(partecipante => partecipante.id == req.params.id)

  if (!partecipante) {
    res.status(404)
    return res.json({
      message: 'partecipante non trovato',
      status: 404,
      error: 'not found'
    })
  }
  res.json(partecipante)
}

const store = (req, res) => {
  res.send('Aggiungo un nuovo partecipante')
}

const update = (req, res) => {
  res.send("Modifico il partecipante con id" + req.params.id)
}

const modify = (req, res) => {
  res.send("Modifica parziale del partecipante con id" + req.params.id)
}

const destroy = (req, res) => {
  const partecipante = partecipanti.find(partecipante => partecipante.id == req.params.id)

  if (!partecipante) {
    res.status(404)
    return res.json({
      message: 'partecipante non trovato',
      status: 404,
      error: 'not found'
    })
  }

  partecipanti.splice(partecipanti.indexOf(partecipante), 1)
  res.sendStatus(204)
}

module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy
}