import { Repo } from '../../../base/infra/Repo';
import { PlayerProfile } from '../domain/PlayerProfile';
import { GetPlayerProfileResponseDTO } from '../useCases/getPlayerProfile/GetPlayerProfileResponseDTO';

export interface IPlayerProfileRepo extends Repo<PlayerProfile> {
  update(): Promise<any>;
  getByPlayerID(): Promise<GetPlayerProfileResponseDTO>;
}
