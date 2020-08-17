import { SubmitSettledTournament } from './SubmitSettledTournament';
import { SubmitSettledTournamentController } from './SubmitSettledTournamentController';

const submitSettledTournament = new SubmitSettledTournament();
const submitSettledTournamentController = new SubmitSettledTournamentController(
  submitSettledTournament
);

export { submitSettledTournament, submitSettledTournamentController };
