import { UniqueEntityID } from '../../../base/domain/UniqueEntityID';
import { AggregateRoot } from '../AggregateRoot';
import { DomainObject } from '../DomainObjects';

export interface IDomainEvent extends DomainObject {
  dateTimeOccurred: Date;
  getAggregateId(): UniqueEntityID;
  eventSubject: EventObject;
}

type EventObject = Nullable<AggregateRoot<any> | { DTOprops: any }>;
