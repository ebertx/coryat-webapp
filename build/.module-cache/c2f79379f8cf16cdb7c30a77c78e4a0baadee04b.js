var cats = ["1", "2", "3", "4", "5", "6"];
var amount1 = ["200", "400", "600", "800", "1000"];

var ScoreBoard = React.createClass({displayName: "ScoreBoard",
    render: function() {
        return (
            React.createElement("div", {className: "container"}, 
                React.createElement("h2", null, "Coryat Score"), 
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

var CatRow = React.createClass({displayName: "CatRow",
    render: function() {
        console.log(this.props.items);
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
                    // amountRow.map(function(m, index) {
                    //     return <div key={index} className="two columns scoreBox">
                    //     <span className="value">{m}</span>
                    //     <a className="right">&#x2713;</a>
                    //     <a className="wrong">&#x2717;</a>
                    //     </div>
                    // })
                
            )
        );
    }
});

var ScoreBox = React.createClass({displayName: "ScoreBox",
    render: function() {
        return (
            React.createElement("div", {key: this.props.key, className: "two columns scoreBox"}, 
                React.createElement("span", {className: "value"}, this.props.score), 
                React.createElement("a", {className: "right"}, "✓"), 
                React.createElement("a", {className: "wrong"}, "✗")
            )
        );
    }
});

React.render(
    React.createElement(ScoreBoard, null),
    document.body
);
