import https from 'https';
import app from './app';

console.log(process.env.HTTPS);
const {HTTPS, PORT} = process.env;

const startServer = () => {
  const listener = () => {
    console.log(`Server listening on port ${PORT}`);
  };

  if (HTTPS === 'true') {
    const options = {
      // key: fs.readFileSync(''),
      // cert: fs.readFileSync(''),
    };
    https.createServer(options, app).listen(PORT, listener);
  } else {
    app.listen(PORT, listener);
  }
};

startServer();
