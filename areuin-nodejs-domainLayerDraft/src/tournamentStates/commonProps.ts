type NewTournamentProps = {rules:}
type ScheduledTournamentProps = NewTournamentProps & {}
type PublishedTournamentProps = ScheduledTournamentProps & any
type ClosedTournamentProps = PublishedTournamentProps & any
type InPlayTournamentProps = ClosedTournamentProps & any
type FinishedTournamentProps = InPlayTournamentProps & any
type SettledTournamentProps = InPlayTournamentProps & any

type NewTournamentStateProps = {}
type ScheduledTournamentStateProps = {}
type PublishedTournamentStateProps = {}
type ClosedTournamentStateProps = {}
type InPlayTournamentStateProps = {}
type FinishedTournamentStateProps = {}
type SettledTournamentStateProps = {}



type AnyStateProps =   NewTournamentStateProps |
                    ScheduledTournamentStateProps |
                    PublishedTournamentStateProps |
                    ClosedTournamentStateProps |
                    InPlayTournamentStateProps |
                    FinishedTournamentStateProps |
                    SettledTournamentStateProps


interface TournamentStateResult {
    props: CoreTournamentProps
    stateProps: AnyStateProps;
    nextState(): TournamentStateResult;
    fail(): FailedTournament;
}


abstract class AggregateRoot {
    props: string;
    constructor(props){
        this.props = props;
        console.log('hello World')
    }
}

class newTournament extends AggregateRoot implements TournamentStateResult {
    stateProps: AnyStateProps;

    constructor(coreProps: CoreTournamentProps, stateProps: NewTournamentStateProps){
        super(coreProps)
        this.stateProps = stateProps;
    }
    create(coreProps: CoreTournamentProps, stateProps: NewTournamentStateProps){
        return null
    }
    nextState(): ScheduledTournament{
        return new ScheduledTournament(this.props)
    };
    fail(){
        return null
    };
}

export class ScheduledTournament extends AggregateRoot implements TournamentStateResult {
    stateProps: 
    constructor(props, stateProps){
        super(props);
    }
    nextState(){
        return null
    };
    fail(){
        return null
    };
}

export class FailedTournament {
    tournament: tournament;
    message?: string
}
