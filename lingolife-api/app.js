import express from 'express';
import cors from 'cors';
import conn from './db/conn.js'; 
import path from 'path';
import { fileURLToPath } from 'url';

// Import routes
import ForumRouter from './routes/Forum.js';
import UserRoutes from './routes/UserRoutes.js';
import chatRouter from './routes/chatRoute.js';
import messageRouter from './routes/messageRoute.js';

// DB Connection
conn();
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware para CORS - permite todas as origens
app.use(cors({ credentials: true, origin: '*' }));

// Middleware para JSON e arquivos estáticos
app.use(express.json());
app.use('/public/filesForum', express.static(path.join(__dirname, 'uploads')));
app.use(express.static('public'));

// Routes
app.use('/forum', ForumRouter);
app.use('/users', UserRoutes);
app.use('/chats', chatRouter);
app.use('/messages', messageRouter);

// Start server
app.listen(5000, function () {
  console.log('Servidor Online!!');
});
