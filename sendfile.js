// Rota para download do relatório em PDF
app.get('/download/:filename', (req, res) => {
    const filename = req.params.filename;
    const path = __dirname + '/' + filename;
    res.download(path);
  });
  