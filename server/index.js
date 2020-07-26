if (!(process.env.NODE_ENV && process.env.NODE_ENV == 'production')) {
  require('dotenv').config();
}

const express = require('express');
const helmet = require('helmet');
const socket = require('socket.io');
const path = require('path');

require('./utils/db-connection');

const { fetchStocks, updateStocks /*createStocks*/ } = require('./services/stockService');

const app = express();
app.use(helmet());

// createStocks();
const UPDATE_INTERVAL = process.env.UPDATE || 5000;
updateStocks(UPDATE_INTERVAL);

app.use(express.static('public'));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public/index.html'));
});
// app.use(express.static('client/build'));
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'client/build/index.html'));
// });

const APP_NAME = process.env.APP_NAME || 'Wallstreet91';

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`${APP_NAME} server is listening on port ${PORT}`);
});

const io = socket(server);

// const FETCH_INTERVAL = process.env.FETCH_INTERVAL || 5000;

let stockInterval = null;

io.on('connection', (socket) => {
  console.log(`${APP_NAME} socket connection is established ID: ${socket.id}`);

  // if (stockInterval) {
  //   clearInterval(stockInterval);
  // }

  socket.on('fetch-stocks', (data) => {
    // stockInterval = setInterval(() => fetchStocks(socket, data), FETCH_INTERVAL);
    fetchStocks(socket, data);
  });

  socket.on('disconnect', () => {
    console.log(`${APP_NAME} socket connection is disconnected`);
    clearInterval(stockInterval);
  });
});
