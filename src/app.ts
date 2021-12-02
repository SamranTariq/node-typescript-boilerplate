import { createServer } from 'http';
import { server_secrets } from './config';
import { ServerSecrets } from './loaders/interfaces';

import { logger } from './utils/logger';
import { version } from '../package.json';

const express = require('express');
const loaders = require('./loaders');

async function startServer() {
  const app = express();

  // ! ➡️ Create Server
  const httpServer = createServer(app);

  // ! Start Express
  await loaders({ expressApp: app });

  // ! ➡️ Server Secrets Object literal
  const config: ServerSecrets = server_secrets;

  // ! ➡️ Start Server
  httpServer.listen(config.port, () => {
    logger.info(`🚀 Server version ${version} is running 🛼`);
    logger.info(
      `📶 http://${config.host}:${config.port} againt corsOrigin ${config.corsOrigin}`
    );
  });
}

startServer();
