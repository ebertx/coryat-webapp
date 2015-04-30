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
  // React.createElement(ScoreBox, null),
  // document.getElementById('example')

  React.createElement(ScoreBox, null),
  document.getElementById('scoreBoard')
);