const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'Hello Node22!\n'
 
  res.end(msg);
});

