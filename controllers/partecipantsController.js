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

  const id = partecipanti.at(-1).id + 1;

  const newPartecipant = {
    id,
    ...req.body
  }

  partecipanti.push(newPartecipant);
  
  res.status(201);
  res.json(partecipanti);
}

const update = (req, res) => {
  const id = req.params.id;
  const partecipant = partecipanti.find(partecipant => partecipant.id == id);

  if(!partecipant){
    res.status(404)
    return res.json({
      message: 'Partecipante non trovato',
      status: 404,
      error: 'Not Found'
    })
  };

  for (let key in req.body){
    partecipant[key] = req.body[key]
  }

  
  res.json(partecipant);
}

const modify = (req, res) => {
  const id = req.params.id;
  const partecipant = partecipanti.find(partecipant => partecipant.id == id);

  if(!partecipant){
    res.status(404)
    return res.json({
      message: 'Partecipante non trovato',
      status: 404,
      error: 'Not Found'
    })
  };

  for (let key in req.body){
    partecipant[key] = req.body[key]
  }

  
  res.json(partecipant);
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