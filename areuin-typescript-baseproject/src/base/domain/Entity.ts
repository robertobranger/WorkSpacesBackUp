import { UniqueEntityID } from './UniqueEntityID';

export abstract class Entity<T> {
  protected readonly _id: UniqueEntityID;
  public readonly props: T;

  constructor(props: T, id: UniqueEntityID) {
    this._id = id;
    this.props = props;
  }

  public equals(object?: Entity<T>): boolean {
    if (object === null || object === undefined) {
      return false;
    }
    if (!(object instanceof Entity)) {
      return false;
    }
    if (this === object) {
      return true;
    }
    return this._id.equals(object._id);
  }
}
