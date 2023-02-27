const express = require('express');
const app = express();
const pdfkit = require('pdfkit');
const fs = require('fs');
const bodyParser = require('body-parser')


// create application/json parser
var jsonParser = bodyParser.json();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Configuração do servidor
const PORT = 3000;



// Rota inicial (envia o arquivo HTML)
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Rota para receber os dados do paciente
app.post('/paciente',jsonParser, (req, res) => {
  // Recebe os dados do paciente enviados pelo formulário

  console.log('recebi dados do paciente');
  console.log(req.body);


  // Realiza o processamento dos dados recebidos e identifica a reação adversa
  // ...

  // Retorna a resposta da identificação da reação adversa para o frontend
  res.status(201).json({message:"Successfully Registered"});
});

// Rota para receber os dados do medicamento
app.post('/medicamento', (req, res) => {
  // Recebe os dados do medicamento enviados pelo formulário
  const nomeMedicamento = req.body.nomeMedicamento;
  const dose = req.body.dose;
  const frequencia = req.body.frequencia;
  const indicacoes = req.body.indicacoes;
  const contraindicacoes = req.body.contraindicacoes;

  // Realiza o processamento dos dados recebidos e identifica a reação adversa
  // ...

  // Retorna a resposta da identificação da reação adversa para o frontend
  res.json({ reacaoAdversa: 'Reação adversa identificada!' });
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});


// Rota para download do relatório em PDF
app.get('/download/:filename', (req, res) => {
    const filename = req.params.filename;
    const path = __dirname + '/' + filename;
    res.download(path);
  });


// Rota inicial (envia o arquivo HTML)
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


// Rota para receber os dados do medicamento
app.post('/medicamento', (req, res) => {
  // Recebe os dados do medicamento enviados pelo formulário
  const nomeMedicamento = req.body.nomeMedicamento;
  const dose = req.body.dose;
  const frequencia = req.body.frequencia;
  const indicacoes = req.body.indicacoes;
  const contraindicacoes = req.body.contraindicacoes;

  // Realiza o processamento dos dados recebidos e identifica a reação adversa
  // ...

  // Retorna a resposta da identificação da reação adversa para o frontend
  res.json({ reacaoAdversa: 'Reação adversa identificada!' });
});

// Inicia o servidor
app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

//mongodb

const express = require('express');
const mongodb = require('mongodb');
const app = express();

// Conecte-se ao banco de dados MongoDB
const MongoClient = mongodb.MongoClient;
const url = 'mongodb://localhost:27017/meubanco';
MongoClient.connect(url, (err, client) => {
  if (err) throw err;
  console.log('Conectado ao banco de dados MongoDB');
  const db = client.db('meubanco');
});

// Defina a rota para receber as informações do formulário
app.post('/enviar', (req, res) => {
  const nome = req.body.nome;
  const sobrenome = req.body.sobrenome;
  const endereco = req.body.endereco;

  // Insira os dados no MongoDB
  db.collection('usuarios').insertOne({ nome: nome, sobrenome: sobrenome, endereco: endereco }, (err, result) => {
    if (err) throw err;
    console.log('Dados inseridos no MongoDB');
    res.redirect('/');
  });
});

// Inicie o servidor
app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
