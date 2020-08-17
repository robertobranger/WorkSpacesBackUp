import { Result } from '../../../../base/logic/Result';
import { UseCaseError } from '../../../../base/logic/UseCaseError';

export namespace SubmitSettledTournamentErrors {
  export class WrongData extends Result<UseCaseError> {}
}
