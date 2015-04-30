var cats = ["1", "2", "3", "4", "5", "6"];
var amount1 = ["200", "400", "600", "800", "1000"];

var ScoreBox = React.createClass({displayName: "ScoreBox",
    render: function() {
        return (
            React.createElement("div", {className: "two columns scoreBox"}, 
                React.createElement("h3", null, "Score Box")
            )
        );
    }
});

React.render(
  React.createElement(ScoreBox, null),
  document.getElementById('example')  
);

React.render(
  React.createElement(ScoreBox, null),
  document.getElementById('scoreBoard')
);