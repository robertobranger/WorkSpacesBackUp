import { UniqueEntityID } from '../../../../base/domain/UniqueEntityID';
import { AggregateRoot } from '../../../../base/domain/AggregateRoot';
import { Result } from '../../../../base/logic/Result';
import { UinCoins } from '../../../../shared/domain/UinCoins';
import { FinishedPick } from './FinishedPick';

type SettledPickProps = {
  finishedPick: FinishedPick;
  result: 'won' | 'lost';
  prizePaid?: UinCoins;
  positionInTournament: number;
};

export class SettledPick extends AggregateRoot<SettledPickProps> {
  constructor(props: SettledPickProps, id: UniqueEntityID) {
    super(props, id);
  }

  public static create(props: SettledPickProps, id: UniqueEntityID) {
    return Result.ok<SettledPick>(new SettledPick(props, id));
  }
}
