$(document).ready(function(){

    var parties = [];
    var callback = function(){};

    $.getJSON( "/home/index.json", function( data ) {
        parties = data;
        callback();
    });

    class PartyResult extends React.Component {
        constructor(){
            super();
        }
        render(){
            if(parties.length == 0){
                return(
                    <div>
                        <h4>No data :(</h4>
                    </div>
                );
            }
            let party = null;
            parties.forEach((p) => {
                if (p.id == this.props.partyId) {
                    party = p;
                }
            });
            if (party == null) {
                return(
                    <div>
                        <p>id out of range</p>
                    </div>
                );
            } else {
                return(
                    <div className="partyDisplay">
                        <h2>{party.PartyName}</h2>
                        <p>Party Vote Seats: {party.PartyVoteSeatsAllocated}</p>
                        <p>Party Votes: {party.PartyVotes}</p>
                        <p>Party Vote Percent: {party.PartyVotePercentageWon}</p>
                        <p>Party Vote Candidates: {party.PartyVoteCadidatesCount}</p>
                        <p>Electorate Seats: {party.ElectorateSeatsAllocated}</p>
                        <p>Electorate Votes: {party.ElectorateVotes}</p>
                        <p>Electorate Percent: {party.ElectoratePercentageWon}</p>
                        <p>Electorate Cadidates: {party.ElectorateCadidatesCount}</p>
                        <p>Total Seats: {party.TotalSeat}</p>
                    </div>
                );
            }
        }
    }

    class PartyResultContainer extends React.Component {
        constructor(){
            super();
            this.state = {
                partyId: 0
            }
            this.ford = this.ford.bind(this);
            this.back = this.back.bind(this);
            callback = () => {
                this.setState({
                    partyId : 1
                });
            }
        }

        setPartyId(id){
            if (id < 1) {
                this.setState({
                    partyId : parties.length
                });
            } else if (id > 15){
                this.setState({
                    partyId : 1
                });
            } else {
                this.setState({
                    partyId : id
                });
            }
        }

        ford(){ this.setPartyId(this.state.partyId + 1); }
        back(){ this.setPartyId(this.state.partyId - 1); }

        render() {
            return(
                <div>
                    <button onClick={this.back}>Previous</button>
                    <button onClick={this.ford}>Next</button>
                    <PartyResult partyId={this.state.partyId} />
                </div>
            );
        }
    }

    ReactDOM.render(
            <div><h2>Hello, world!</h2><br /><PartyResultContainer /></div>,
            document.getElementById('example')
        );
    $('h1').css({ color: 'red' });
});
