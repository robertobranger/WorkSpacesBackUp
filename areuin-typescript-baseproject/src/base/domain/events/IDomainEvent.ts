import { UniqueEntityID } from '../../../base/domain/UniqueEntityID';
import { AggregateRoot } from '../AggregateRoot';

export interface IDomainEvent {
  dateTimeOccurred: Date;
  getAggregateId(): UniqueEntityID;
  eventSubject: EventSubject;
}

type EventSubject = Nullable<AggregateRoot<any> | { DTOprops: any }>;
