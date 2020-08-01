import io from 'socket.io-client';

const SOCKET_URL = 'http://localhost:5000';

console.log('ConsoleLog: SOCKET_URL', SOCKET_URL);

const socket = io(SOCKET_URL, { transports: ['websocket'] });

function subscribeToStocks(email, callback) {
  // Instead of getting the email as argument, can be fetched here from local storage
  // for showing same content on multiple tabs.
  socket.on('stocks-fetched', (stocks) => callback(stocks));
  setInterval(() => {
    socket.emit('fetch-stocks', { email });
  }, 3000);
}

function unsubscribeToStocks() {
  socket.off('fetch-stocks');
  socket.disconnect();
}

export { subscribeToStocks, unsubscribeToStocks };
