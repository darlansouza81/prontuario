const express = require('express');
const app = express();
const pdfkit = require('pdfkit');
const fs = require('fs');

// Configuração do servidor
const PORT = 3000;

// Rota inicial (envia o arquivo HTML)
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Rota para receber os dados do paciente
app.post('/paciente', (req, res) => {
  // Recebe os dados do paciente enviados pelo formulário
  const nome = req.body.nome;
  const idade = req.body.idade;
  const genero = req.body.genero;
  const doencas = req.body.doencas;
  const medicamentos = req.body.medicamentos;
  const alergias = req.body.alergias;

  // Realiza o processamento dos dados recebidos e identifica a reação adversa
  // ...

  // Retorna a resposta da identificação da reação adversa para o frontend
  res.json({ reacaoAdversa: 'Reação adversa identificada!' });
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

// Rota para receber os dados do paciente
app.post('/paciente', (req, res) => {

  console.log(req);


  // Recebe os dados do paciente enviados pelo formulário
  const nome = req.body.nome;
  const idade = req.body.idade;
  const genero = req.body.genero;
  const doencas = req.body.doencas;
  const medicamentos = req.body.medicamentos;
  const alergias = req.body.alergias;

  // Realiza o processamento dos dados recebidos e identifica a reação adversa
  // ...

  
  // Retorna a resposta da identificação da reação adversa para o frontend
  res.json({ reacaoAdversa: 'Reação adversa identificada!', relatorio: 'relatorio.pdf' });
});

// Rota para receber os dados do medicamento
app.post('/medicamento', (req, res) => {
  // Recebe os dados do medicamento enviados pelo formulário
  const nomeMedicamento = req.body.nomeMedicamento;
  const dose = req.body.dose;
  const frequencia = req.body.frequencia;
  const indicacoes = req.body.indicacoes;
  const contraindicacoes = req.body.contraindicacoes;
});
  // Realiza o processamento dos dados recebidos e identifica a reação adversa
  // ...

  // Gera o relatório em PDF
  //const doc = new pdfkit();
  //doc.pipe(fs.createWriteStream('relatorio.pdf'));

  // Adiciona o título do relatório
  //doc.fontSize(20).text('Relatório de Atendimento', { align: 'center' });

  // Adiciona as informações do medicamento
  //doc.fontSize(16).text(`Nome: ${nomeMedicamento}`);
  //doc.fontSize(16).text(`Dose: ${dose}`);
  //doc.fontSize(16).text(`Frequência: ${frequencia}`);
  //doc.fontSize

// Rota inicial (envia o arquivo HTML)
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Rota para receber os dados do paciente
app.post('/paciente', (req, res) => {
  // Recebe os dados do paciente enviados pelo formulário
  const nome = req.body.nome;
  const idade = req.body.idade;
  const genero = req.body.genero;
  const doencas = req.body.doencas;
  const medicamentos = req.body.medicamentos;
  const alergias = req.body.alergias;

  // Realiza o processamento dos dados recebidos e identifica a reação adversa
  // ...

  // Retorna a resposta da identificação da reação adversa para o frontend
  res.json({ reacaoAdversa: 'Reação adversa identificada!' });
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