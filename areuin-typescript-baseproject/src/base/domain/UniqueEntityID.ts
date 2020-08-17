import { v4 as uuid } from 'uuid';
import { Identifier } from './Identifier';

export class UniqueEntityID extends Identifier<string | number | BigInt> {
  constructor(id?: string | number | BigInt) {
    super(id ? id : uuid());
  }
}
