import { Result } from './Result';
import { UseCaseError } from './UseCaseError';

export class UnexpectedAppError extends Result<UseCaseError> {
  public constructor(err: any) {
    super(
      false,
      {
        message: `An unexpected error ocurred`,
        error: err
      } as UseCaseError,
      undefined
    );
    console.log(`[AppError]: An unexpected error ocurred`);
    console.log(err);
  }

  public static create(err: any): UnexpectedAppError {
    return new UnexpectedAppError(err);
  }
}
