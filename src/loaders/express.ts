import * as express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

import cors from 'cors';
import { version } from '../../package.json';
import { assignid, accessLogStream } from './helper';
import { assignMorganToken } from './middlewares';

export default async ({ app }: { app: express.Application }) => {
  app.use(cors()); // ! ➡️ Enable Cors
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  // ! ➡️ Set Morgan Options

  assignMorganToken(); // ! ➡️ Use Morgan Middelwares
  app.use(assignid); // ! ➡️ Assign Unique Id to Logs
  app.use(
    morgan(':id :param :method :status :url "HTTP/:http-version"', {
      stream: accessLogStream(),
    })
  );

  // --> ...More middlewares

  // ! ➡️ Health Testing API Calls

  app.get('/', (_: any, res: any) =>
    res.send(`server is up on version ${version}`)
  );
  app.head('/status', (req, res) => {
    res.status(200).end();
  });
  app.enable('trust proxy');

  // --> Return the express app
  return app;
};
