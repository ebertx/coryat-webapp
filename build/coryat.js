var cats = ["1", "2", "3", "4", "5", "6"];
var amount1 = ["200", "400", "600", "800", "1000"];
var amount2 = ["400", "800", "1200", "1600", "2000"];

var Coryat = React.createClass({displayName: "Coryat",
    render: function() {
        return (
            React.createElement("div", {className: "container"}, 
                React.createElement("h3", null, "Coryat Score"), 
                React.createElement(ScoreBoard1, {amount: amount1}), 
                React.createElement("br", null), React.createElement("br", null), 
                React.createElement(ScoreBoard2, {amount: amount2})
            )
        )
    }
});

var ScoreBoard1 = React.createClass({displayName: "ScoreBoard1",
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
            React.createElement("div", null, 
                React.createElement("h2", null, "Jeopardy"), 
                React.createElement(Score, {score: self.state.score}), 
                React.createElement("hr", null), 
                React.createElement(ScoreRow, {score: self.props.amount[0], onUpdate: self.onUpdate}), 
                React.createElement(ScoreRow, {score: self.props.amount[1], onUpdate: self.onUpdate}), 
                React.createElement(ScoreRow, {score: self.props.amount[2], onUpdate: self.onUpdate}), 
                React.createElement(ScoreRow, {score: self.props.amount[3], onUpdate: self.onUpdate}), 
                React.createElement(ScoreRow, {score: self.props.amount[4], onUpdate: self.onUpdate})
            )
        );
    }
});

var ScoreBoard2 = React.createClass({displayName: "ScoreBoard2",
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
            React.createElement("div", null, 
                React.createElement("h2", null, "Double Jeopardy"), 
                React.createElement(Score, {score: self.state.score}), 
                React.createElement("hr", null), 
                React.createElement(ScoreRow, {score: self.props.amount[0], onUpdate: self.onUpdate}), 
                React.createElement(ScoreRow, {score: self.props.amount[1], onUpdate: self.onUpdate}), 
                React.createElement(ScoreRow, {score: self.props.amount[2], onUpdate: self.onUpdate}), 
                React.createElement(ScoreRow, {score: self.props.amount[3], onUpdate: self.onUpdate}), 
                React.createElement(ScoreRow, {score: self.props.amount[4], onUpdate: self.onUpdate})
            )
        );
    }
});


var Score = React.createClass({displayName: "Score",
    render: function() {
        return (
            React.createElement("div", {className: "score"}, 
                React.createElement("span", null, "Score:"), " ", 
                React.createElement("span", {className: "scoreValue"}, this.props.score)
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
        var self = this;
        return (
            React.createElement("div", {className: "row"}, 
                   
                    
                    amountRow.map(function(m, index) {
                        return React.createElement(ScoreBox, {key: index, score: m, onUpdate: self.props.onUpdate})
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
            React.createElement("div", {key: this.props.key, className: classes}, 
                React.createElement("span", {className: "value"}, this.props.score), 
                React.createElement("a", {className: "correct", onClick: this.correctClick}, "✓"), 
                React.createElement("a", {className: "skipped", onClick: this.skippedClick}, "-"), 
                React.createElement("a", {className: "wrong", onClick: this.wrongClick}, "✗")
            )
        );
    }
});

React.render(
    React.createElement(Coryat, null),
    document.body
);
