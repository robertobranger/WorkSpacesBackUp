import { UseCaseError } from '../../../../base/logic/UseCaseError';
import { Result } from '../../../../base/logic/Result';

export namespace UpdatePlayerProfileErrors {
  export class WrongDataFormat extends Result<UseCaseError> {
    constructor() {
      super(false, { message: 'A correct UpdatePlayerDTO must be supplied' });
    }
  }
}
