var log         = require('../lib/logger')(__filename),
    jsonServer  = require('json-server'),
    server      = jsonServer.create(),
    router      = jsonServer.router('db/db.json'),
    db          = router.db,
    middlewares = jsonServer.defaults(),
    port        = 8080;

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

server.use(jsonServer.rewriter({
  '/api/': '/'
}));

// Add custom collection
server.post('/newcollection/:collection', function (req, res) {
  var result = "No new collection created";
  if(db[req.params.collection] == null) {
    db[req.params.collection] = [];
    db.write();
    result = "Created new collection " + req.params.collection;
  }
  res.send({"message": result}).end();
});

// hello world test
server.get('/hello', function (req, res) {
  log.info(req.body);
  res.send({"hello": "world"}).end();
});

// Use default router
server.use(router);
server.listen(port, function() {
  log.info("Server listening to requests at port:", port);
});

process.on('SIGINT', function() {
    log.info("Closing app...");
    setTimeout(function(){ process.exit(0); }, 1500);
});
