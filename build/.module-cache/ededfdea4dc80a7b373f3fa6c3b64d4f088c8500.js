var ScoreBox = React.createClass({displayName: "ScoreBox",
    render: function() {
        return (
            React.createElement("div", {className: "scoreBox"}

            )
        );
    }
});

React.render(
  React.createElement("h1", null, "Coryat Score"),
  document.getElementById('example')
);