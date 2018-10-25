import express from 'express';
import http from 'http';
import path from 'path';

const app = express();
const publicPath = path.join(__dirname, '../build');
const indexPath = path.resolve(__dirname, publicPath, 'index.html');

app.set('port', port);

app.use('/', express.static(publicPath));
app.get('/', (req, res) => res.sendFile(indexPath));

// Set up server
const port = parseInt(process.env.PORT, 10) || 5000;
const server = http.createServer(app);
server.listen(port);
