import express, {json} from 'express';
import path from 'path';
import ejs from 'ejs';
import cookieParser from 'cookie-parser';

import pageRouter from './pages/index';

const assetsPath = path.join(__dirname, '../../dist/client');
const app = express();

app
  .set('views', assetsPath)
  .engine('html', ejs.renderFile)
  .use(json())
  .use(cookieParser())
  .use('/api', (req, res) => {
    res.send('hello');
  })
  .get('/*', pageRouter);

export default app;
