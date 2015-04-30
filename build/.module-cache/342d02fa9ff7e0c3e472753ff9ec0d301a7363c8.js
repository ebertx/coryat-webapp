var ScoreBox = React.createClass({displayName: "ScoreBox",
    render: function() {
        return (
            React.createElement("div", {className: "scoreBox"}, 
                React.createElement("h3", null, "Score Box")
            )
        );
    }
});

React.render(
  // <h1>Coryat Score</h1>,
  // document.getElementById('example')

  React.createElement(ScoreBox, null),
  document.getElementById('content')
);