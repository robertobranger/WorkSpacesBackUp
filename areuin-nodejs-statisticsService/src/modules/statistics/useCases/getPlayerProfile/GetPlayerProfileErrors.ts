import { UseCaseError } from '../../../../base/logic/UseCaseError';
import { Result } from '../../../../base/logic/Result';

export namespace GetPlayerProfileErrors {
  export class PlayerDoesntExist extends Result<UseCaseError> {
    constructor() {
      super(false, { message: 'User doesnt have tracked profile' });
    }
  }
}
