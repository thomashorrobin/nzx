$(document).ready(function(){
    class CoolButton extends React.Component {
        constructor(){
            super();
            this.state = {
                label: "button!"
            };
            this.handleClick = this.handleClick.bind(this);
        }
        handleClick(){
            this.setState({ label: "Button clicked!" });
        }
        render(){
            return(
                <div>
                    <button onClick={this.handleClick}>{this.state.label}</button>
                </div>
            );
        }
    }

    class Election extends React.Component {
        constructor(){
            super();
        }
    }
    
    var Sub = React.createClass({
        render: function(){
            this.state = {
                name : "tom"
            };
            window.testfn = () => this.setState({ name: "bob" });
            return(
                <h3>Im a sub! {this.state.name}</h3>
            );
        }
    });
    ReactDOM.render(
            <div><h2>Hello, world!</h2><Sub /><br /><CoolButton /></div>,
            document.getElementById('example')
        );
    $('h1').css({ color: 'red' });
});
