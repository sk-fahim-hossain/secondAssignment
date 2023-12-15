import express, { Application } from 'express';
import cors from 'cors';
import { userRoutes } from './app/modules/user/user.route';

const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  //   res.status(200).json({
  //     success: true,
  //     message: 'Welcome to api',
  //   });
  res.status(200).json({
    success: true,
    message: 'Welcome to API',
  });
});

// application routes
app.use('/api', userRoutes);

export default app;
