import { Server as SocketIOServer } from "socket.io";

let io;

export const registerSocketServer = (server) => {
  io = new SocketIOServer(server.server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST'],
    },
  });

  io.on('connection', (socket) => {
    console.log('new user connected');
    console.log(socket.id);
  });
};


