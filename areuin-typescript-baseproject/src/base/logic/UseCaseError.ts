//Cada use Case debe tener un archivo donde se listan todos los useCase Errors para tenerlos visibles.

interface IUseCaseError {
  message: string;
}

export abstract class UseCaseError implements IUseCaseError {
  public readonly message: string;

  constructor(message: string) {
    this.message = message;
  }
}
