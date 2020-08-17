import { UseCase } from '../../../../base/domain/UseCase';
import { SubmitSettledTournamentErrors } from './submitSettledTournamentErrors';
import { Result } from '../../../../base/logic/Result';
import { SubmitSettledTournamentDTO } from './SubmitSettledTournamentDTO';

type Errors = SubmitSettledTournamentErrors.WrongData | Result<any>;
type Response = Errors | Result<void>;

export class SubmitSettledTournament
  implements UseCase<SubmitSettledTournamentDTO, Promise<Response>> {
  private tournamentRepo: TournamentRepo;
  private pickRepo: PickRepo;

  constructor(tournamentRepo: TournamentRepo, pickRepo: PickRepo) {
    this.tournamentRepo = tournamentRepo;
    this.pickRepo = pickRepo;
  }
  public async execute(request: SubmitSettledTournamentDTO): Promise<Response> {
    //Llamar a la creacion del objeto y su guardado en persistencia.

    await this.pickRepo.save(pick);
    await this.tournamentRepo.save(tournament);

    return Result.ok<void>();
  }
}
