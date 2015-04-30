var cats = ["1", "2", "3", "4", "5", "6"];
var amount1 = ["200", "400", "600", "800", "1000"];
var amount2 = ["400", "800", "1200", "1600", "2000"];

var ScoreBoard = React.createClass({displayName: "ScoreBoard",
    render: function() {
        return (
            React.createElement("div", {className: "container"}, 
                React.createElement("h2", null, "Coryat Score"), 
                React.createElement(Score, null), 
                React.createElement(CatRow, {items:  cats }), 
                React.createElement(ScoreRow, {score:  amount1[0] }), 
                React.createElement(ScoreRow, {score:  amount1[1] }), 
                React.createElement(ScoreRow, {score:  amount1[2] }), 
                React.createElement(ScoreRow, {score:  amount1[3] }), 
                React.createElement(ScoreRow, {score:  amount1[4] })
            )
        );
    }
});

var Score = React.createClass({displayName: "Score",
    getInitialState: function() {
        return { score: '0' };
    },
    render: function() {
        return (
            React.createElement("div", {className: "score"}, 
                React.createElement("span", null, "Score:"), " ", 
                React.createElement("span", {className: "scoreValue"}, "$", this.state.score)
            )
        )
    }
});

var CatRow = React.createClass({displayName: "CatRow",
    render: function() {
        return (
            React.createElement("div", {className: "row"}, 
                 
                    this.props.items.map(function(m, index) {
                        return React.createElement("div", {key: index, className: "two columns scoreBox"}, m);
                    })
                
            )
        );
    }
});

var ScoreRow = React.createClass({displayName: "ScoreRow",
    render: function() {
        var amountRow = [this.props.score, this.props.score, this.props.score,
                        this.props.score, this.props.score, this.props.score];
        return (
            React.createElement("div", {className: "row"}, 
                
                    amountRow.map(function(m, index) {
                        return React.createElement(ScoreBox, {key: index, score: m})
                    })
                
            )
        );
    }
});

var ScoreBox = React.createClass({displayName: "ScoreBox",
    getInitialState: function() {
        return { status: 'neutral' };
    },
    correctClick: function(event) {
        this.setState( {status: 'correct'} );
    },
    wrongClick: function(event) {
        this.setState( {status: 'wrong'} );
    },
    skippedClick: function(event) {
        this.setState( {status: 'skipped'} );
    },
    render: function() {
        var classes = "two columns scoreBox " + this.state.status;
        return (
            React.createElement("div", {key: this.props.key, className: classes}, 
                React.createElement("span", {className: "value"}, this.props.score), 
                React.createElement("a", {className: "correct", onClick: this.correctClick.bind(this, i)}, "✓"), 
                React.createElement("a", {className: "skipped", onClick: this.skippedClick.bind(this, i)}, "-"), 
                React.createElement("a", {className: "wrong", onClick: this.wrongClick(this.bind, i)}, "✗")
            )
        );
    }
});

React.render(
    React.createElement(ScoreBoard, null),
    document.body
);
