var cats = ["1", "2", "3", "4", "5", "6"];
var amount1 = ["200", "400", "600", "800", "1000"];

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
    render: function() {
        return (
            React.createElement("div", {className: "score"}, 
                React.createElement("span", null, "Score:"), " ", 
                React.createElement("span", {className: "scoreValue"}, "$0")
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
        console.log(event);
    },
    wrongClick: function(event) {
        this.setState( {status: 'wrong'} );
        console.log(event);
    },
    render: function() {
        var classString = "two columns scoreBox" + this.state.status;
        return (
            React.createElement("div", {key: this.props.key, className: "{classString}"}, 
                React.createElement("span", {className: "value"}, this.props.score), 
                React.createElement("a", {className: "right", onClick: this.correctClick}, "✓"), 
                React.createElement("a", {className: "wrong", onClick: this.wrongClick}, "✗"), 
                React.createElement("span", null, status)
            )
        );
    }
});

React.render(
    React.createElement(ScoreBoard, null),
    document.body
);
