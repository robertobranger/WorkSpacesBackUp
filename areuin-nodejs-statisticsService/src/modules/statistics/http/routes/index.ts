import express from 'express';
import { getPlayerProfileController } from '../../useCases/getPlayerProfile';

const profileRouter = express.Router();

profileRouter.get('/me', (req, res) => getPlayerProfileController.execute(req, res));

export { profileRouter };
