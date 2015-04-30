var cats = ["1", "2", "3", "4", "5", "6"];
var amount1 = ["200", "400", "600", "800", "1000"];

var CatRow = React.createClass({displayName: "CatRow",
    render: function() {
        return (
            React.createElement("div", {class: "row"}, 
                 
                    this.props.items.map(function(m, index) {
                        return React.createElement("div", {className: "two columns scoreBox"}, m);
                    })
                
            )
        );
    }
});

var ScoreRow = React.createClass({displayName: "ScoreRow",
    render: function() {
        return (
            React.createElement("div", {class: "row"}, 
                React.createElement("div", {className: "two columns scoreBox"})
            )
        );
    }
})


React.render(
    React.createElement("h2", null, "Coryat Scorer"),
    document.getElementById('example')  
);

React.render(
    React.createElement(CatRow, {items:  cats }),
    document.getElementById('scoreBoard')
);

React.render(
    React.createElement(ScoreRow, {score:  amount1[0] }),
    document.getElementById('scoreBoard')
);

// React.render(
//     {
//         cats.map(function(category) {
//             return <div class="scoreBox">{category}</div>
//         })
//     },
//     document.getElementByID('categories')
// );