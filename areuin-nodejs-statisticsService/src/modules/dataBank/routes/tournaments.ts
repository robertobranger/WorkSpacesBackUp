import express from 'express';
import { submitSettledTournamentController } from '../useCases/submitSettledTournament';

const tournamentRouter = express.Router();

tournamentRouter.post('/', (req, res) => submitSettledTournamentController.execute(req, res));
