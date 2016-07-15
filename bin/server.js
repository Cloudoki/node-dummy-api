var log         = require('../lib/logger')(__filename),
    jsonServer  = require('json-server'),
    enableDestroy = require('server-destroy'),
    app         = undefined,
    db_file     = undefined,
    router      = undefined,
    db          = undefined,
    middlewares = undefined,
    port        = 8787,
    OK          = 200,
    CONFLICT    = 409,
    NOTFOUND    = 404,
    server      = undefined;

function start() {
  app         = jsonServer.create();
  db_file     = 'db/db.json';
  router      = jsonServer.router(db_file);
  db          = router.db;
  middlewares = jsonServer.defaults();

  log.info("Server starting...");

  // Set default middlewares (logger, static, cors and no-cache)
  app.use(middlewares);

  app.use(jsonServer.rewriter({
    '/api/': '/'
  }));

  // Add custom collection
  app.post('/newcollection/:collection', function (req, res) {
    var dbData = db.getState();
    var result = "Already exists. No new collection created.";

    var status = CONFLICT;

    if(dbData[req.params.collection] == null) {
      dbData[req.params.collection] = [];
      result = "Created new collection " + req.params.collection;
      db.setState(dbData);
      db.write();
      status = OK;
    }
    res.status(status).send({"message": result}).end();

    if(status = OK) {
      server && server.destroy();
      start();
    }
  });

  // Remove custom collection
  app.delete('/newcollection/:collection', function (req, res) {
    var dbData = db.getState();
    var result = "That collection doesn't exists.";

    var status = NOTFOUND;

    if(dbData[req.params.collection]) {
      delete dbData[req.params.collection];
      result = "Collection deleted " + req.params.collection;
      db.setState(dbData);
      db.write();
      status = OK;
    }

    res.status(status).send({"message": result}).end();

    if(status = OK) {
      server && server.destroy();
      start();
    }
  });

  // hello world test
  app.get('/hello', function (req, res) {
    log.info(req.body);
    res.send({"hello": "world"}).end();
  });

  // Use default router
  app.use(router);

  // start listening
  server = app.listen(port, function() {
    log.info("Server listening to requests at port:", port);
  });

  enableDestroy(server);
}

start();

process.on('SIGINT', function() {
  log.info("Closing app...");
  process.exit(0);
});
