import { Controller } from '../../../../base/infra/Controller';
import { GetPlayerProfile } from './GetPlayerProfile';
import * as express from 'express';
import { GetPlayerProfileResponseDTO } from './GetPlayerProfileResponseDTO';

export class GetPlayerProfileController extends Controller {
  private useCase: GetPlayerProfile;
  constructor(useCase: GetPlayerProfile) {
    super();
    this.useCase = useCase;
  }

  public async executeImpl(req: express.Request, res: express.Response) {
    const getPlayerProfileResponseDTO = await this.useCase.execute();
    const dto = getPlayerProfileResponseDTO.getValue();
    console.log(req);
    return this.ok<GetPlayerProfileResponseDTO>(res, dto);
  }
}
