var cats = ["1", "2", "3", "4", "5", "6"];
var amount1 = ["200", "400", "600", "800", "1000"];
var amount2 = ["400", "800", "1200", "1600", "2000"];

var Coryat = React.createClass({
    render: function() {
        return (
            <div className="container">
                <h3>Coryat Score</h3>
                <ScoreBoard1 amount={amount1} />
                <br /><br />
                <ScoreBoard2 amount={amount2} />
            </div>
        )
    }
});

var ScoreBoard1 = React.createClass({
    getInitialState: function() {
        return { score: 0 };
    },
    onUpdate: function(valueChange) {
        this.setState( {score: this.state.score + valueChange } );;
        // console.log("scoreboard update: " + this.state.score);
    },
    render: function() {
        // <CatRow items={cats} />
        var self = this;
        return (
            <div>
                <h2>Jeopardy</h2>
                <Score score={self.state.score} />
                <hr />
                <ScoreRow score={self.props.amount[0]} onUpdate={self.onUpdate} />
                <ScoreRow score={self.props.amount[1]} onUpdate={self.onUpdate} />
                <ScoreRow score={self.props.amount[2]} onUpdate={self.onUpdate} />
                <ScoreRow score={self.props.amount[3]} onUpdate={self.onUpdate} />
                <ScoreRow score={self.props.amount[4]} onUpdate={self.onUpdate} />
            </div>
        );
    }
});

var ScoreBoard2 = React.createClass({
    getInitialState: function() {
        return { score: 0 };
    },
    onUpdate: function(valueChange) {
        this.setState( {score: this.state.score + valueChange } );;
        // console.log("scoreboard update: " + this.state.score);
    },
    render: function() {
        // <CatRow items={cats} />
        var self = this;
        return (
            <div>
                <h2>Double Jeopardy</h2>
                <Score score={self.state.score} />
                <hr />
                <ScoreRow score={self.props.amount[0]} onUpdate={self.onUpdate} />
                <ScoreRow score={self.props.amount[1]} onUpdate={self.onUpdate} />
                <ScoreRow score={self.props.amount[2]} onUpdate={self.onUpdate} />
                <ScoreRow score={self.props.amount[3]} onUpdate={self.onUpdate} />
                <ScoreRow score={self.props.amount[4]} onUpdate={self.onUpdate} />
            </div>
        );
    }
});


var Score = React.createClass({
    render: function() {
        return (
            <div className="score">
                <span>Score:</span>&nbsp;
                <span className="scoreValue">{this.props.score}</span>
            </div>
        )
    }
});

var CatRow = React.createClass({
    render: function() {
        return (
            <div className="row">
                { 
                    this.props.items.map(function(m, index) {
                        return <div key={index} className="two columns scoreBox">{m}</div>;
                    })
                }
            </div>
        );
    }
});

var ScoreRow = React.createClass({
    render: function() {
        var amountRow = [this.props.score, this.props.score, this.props.score,
                        this.props.score, this.props.score, this.props.score];
        var self = this;
        return (
            <div className="row">
                {   
                    
                    amountRow.map(function(m, index) {
                        return <ScoreBox key={index} score={m} onUpdate={self.props.onUpdate} />
                    })
                }
            </div>
        );
    }
});

var ScoreBox = React.createClass({
    getInitialState: function() {
        return { status: 'neutral' };
    },
    correctClick: function(event) {
        var valueChange = 0;
        if (this.state.status == 'wrong') {
            valueChange += parseInt(this.props.score);
        }
        valueChange += parseInt(this.props.score);
        
        this.setState( {status: 'correct'} );
        this.props.onUpdate(valueChange);
    },
    wrongClick: function(event) {
        var valueChange = 0;
        if (this.state.status == 'correct') {
            valueChange -= parseInt(this.props.score);
        }
        valueChange -= parseInt(this.props.score);
        
        this.setState( {status: 'wrong'} );
        this.props.onUpdate(valueChange);
    },
    skippedClick: function(event) {
        var valueChange = 0;
        if (this.state.status == 'correct') {
            valueChange -= parseInt(this.props.score);
        }
        if (this.state.status == 'wrong') {
            valueChange += parseInt(this.props.score);
        }

        this.setState( {status: 'skipped'} );
        this.props.onUpdate(valueChange);
    },
    render: function() {
        var classes = "two columns scoreBox " + this.state.status;
        return (
            <div key={this.props.key} className={classes}>
                <span className="value">{this.props.score}</span>
                <a className="correct" onClick={this.correctClick}>&#x2713;</a>
                <a className="skipped" onClick={this.skippedClick}>-</a>
                <a className="wrong" onClick={this.wrongClick}>&#x2717;</a>
            </div>
        );
    }
});

React.render(
    <Coryat />,
    document.body
);
