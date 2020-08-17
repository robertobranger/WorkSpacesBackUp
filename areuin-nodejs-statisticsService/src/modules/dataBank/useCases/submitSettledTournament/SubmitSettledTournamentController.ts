import { Controller } from '../../../../base/infra/Controller';
import * as express from 'express';
import { SubmitSettledTournamentDTO } from './SubmitSettledTournamentDTO';
import { SubmitSettledTournament } from './SubmitSettledTournament';

export class SubmitSettledTournamentController extends Controller {
  private useCase: SubmitSettledTournament;

  constructor(useCase: SubmitSettledTournament) {
    super();
    this.useCase = useCase;
  }

  async executeImpl(req: express.Request, res: express.Response) {
    const dto: SubmitSettledTournamentDTO = {};
    const result = await this.useCase.execute(dto);
  }
}
