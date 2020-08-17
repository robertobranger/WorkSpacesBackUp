import { UniqueEntityID } from './UniqueEntityID';

export interface DomainObject {}

export interface IdentifiableDomainObject {
  _id: UniqueEntityID;
}
