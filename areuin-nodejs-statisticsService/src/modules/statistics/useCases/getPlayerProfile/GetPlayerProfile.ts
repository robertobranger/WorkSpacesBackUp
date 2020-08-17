import { UseCase } from '../../../../base/domain/UseCase';
import { IPlayerProfileRepo } from '../../repos/PlayerProfileRepo';
import { Result } from '../../../../base/logic/Result';
import { GetPlayerProfileErrors } from './GetPlayerProfileErrors';
import { GetPlayerProfileResponseDTO } from './GetPlayerProfileResponseDTO';

type Errors = GetPlayerProfileErrors.PlayerDoesntExist;
type Response = Errors | Result<GetPlayerProfileResponseDTO>;

export class GetPlayerProfile implements UseCase<void, Response> {
  private playerProfileRepo: IPlayerProfileRepo;

  constructor(playerProfileRepo: IPlayerProfileRepo) {
    this.playerProfileRepo = playerProfileRepo;
  }

  public async execute() {
    const playerProfile = await this.playerProfileRepo.getByPlayerID();
    return Result.ok<GetPlayerProfileResponseDTO>(playerProfile);
  }
}
