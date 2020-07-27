if (!(process.env.NODE_ENV && process.env.NODE_ENV == 'production')) {
  require('dotenv').config();
}

const express = require('express');
const helmet = require('helmet');
const socket = require('socket.io');
const path = require('path');
const cors = require('cors');

require('./utils/db-connection');

const { fetchStocks, updateStocks } = require('./services/stockService');

const app = express();
app.use(cors());
app.use(helmet());

const UPDATE_INTERVAL = process.env.UPDATE || 5000;
updateStocks(UPDATE_INTERVAL);

app.use(express.static(path.resolve('client/build')));
app.get('*', (req, res) => {
  res.sendFile(path.resolve('client/build/index.html'));
});

const APP_NAME = process.env.APP_NAME || 'Wallstreet91';

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`${APP_NAME} server is listening on port ${PORT}`);
});

const io = socket(server);

let stockInterval = null;

io.on('connection', (socket) => {
  console.log(`${APP_NAME} socket connection is established ID: ${socket.id}`);

  socket.on('fetch-stocks', (data) => {
    fetchStocks(socket, data);
  });

  socket.on('disconnect', () => {
    console.log(`${APP_NAME} socket connection is disconnected`);
    clearInterval(stockInterval);
  });
});
