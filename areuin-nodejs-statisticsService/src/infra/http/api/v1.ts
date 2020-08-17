import express from 'express';
import { profileRouter } from '../../../modules/statistics/http/routes';

const v1Router = express.Router();

v1Router.get('/', (req, res) => {
  return res.json({ message: 'Up' });
});
v1Router.use('/profile', profileRouter);
// All routes go here.
// Example:
// v1Router.use('/user', userRouter)

export { v1Router };
