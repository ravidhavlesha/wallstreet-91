import socketClient from 'socket.io-client';

const SOCKET_URL = process.env.SOCKET_URL || 'https://wallstreet-psi.vercel.app';

console.log('ConsoleLog: SOCKET_URL', SOCKET_URL);

const socket = socketClient(SOCKET_URL);

function subscribeToStocks(email, callback) {
  // Instead of getting the email as argument, can be fetched here from local storage
  // for showing same content on multiple tabs.
  socket.on('stocks-fetched', (stocks) => callback(stocks));
  setInterval(() => {
    socket.emit('fetch-stocks', { email });
  }, 5000);
}

function unsubscribeToStocks() {
  socket.off('fetch-stocks');
  socket.disconnect();
}

export { subscribeToStocks, unsubscribeToStocks };
