
import io from 'socket.io-client/dist/socket.io';
import * as settings from './../settings';
export function connectSocket(socket) {
  if (socket == null) {
    return io(settings.urlConfig.socketUrl, {
      jsonp: false,
      transports: ['websocket'],
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionAttempts: Infinity,
    });
  } else {
    return socket;
  }
}

export function listenSocket(socket,flag, callback) {
  try {
    socket.on('connect_timeout', timeout => {
      //console.log('connect_timeout' + timeout);
    });
    socket.on('reconnect_error', error => {
      //console.log('reconnect_error');
    });
    socket.on('reconnect_attempt', () => {
      socket.io.opts.transports = ['websocket'];
    });
    socket.on('connect', function(){
      //console.log("connected")
    });
    socket.on(flag, async data => {
      if (callback !== null) callback(flag, data);
    });
  } catch (ex) {
    //console.log('Socket exception ' + ex);
  }
}
