import { Server } from "socket.io";
import { Server as HttpServer } from "http";

export default function initializeSocket(httpServer: HttpServer): Server {
  const io = new Server(httpServer, {
    cors: {
      origin: '*',
    },
  });

  const settingNamespace = io.of('/updateMessages');

  settingNamespace.on('connection', (socket) => {
    console.log('User connected:', socket.id);

    socket.on('messages', (messages) => {
      settingNamespace.emit('messages', messages);
    });

    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.id);
    });
  });

  return io;
}
