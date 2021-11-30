const express = require('express');
const { createServer } = require('http');
const cors = require('cors');
const config = require('config');

const { logger } = require('./utils/logger');
const { version } = require('../package.json');

const corsOrigin: string = config.get('corsOrigin');
const port: number = config.get('port');
const host: string = config.get('host');

const app = express();
const httpServer = createServer(app);

app.get('/', (_: any, res: any) =>
  res.send(`server is up on version ${version}`)
);

httpServer.listen(port, host, () => {
  logger.info(`🚀 Server version ${version} is running 🛼`);
  logger.info(`http://${host}:${port}`);
});
