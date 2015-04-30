var cats = ["1", "2", "3", "4", "5", "6"];
var amount1 = ["200", "400", "600", "800", "1000"];

var ScoreBoard = React.createClass({displayName: "ScoreBoard",
    render: function() {
        return (
            React.createElement("div", {className: "container"}, 
                React.createElement("h2", null, "Coryat Scorer"), 
                React.createElement(CatRow, {items:  cats })
            )
        );
    }
});

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


// React.render(
//     <h2>Coryat Scorer</h2>,
//     document.getElementById('example')  
// );

React.render(
    React.createElement(ScoreBoard, null),
    // <CatRow items={ cats } />,
    document.body
);

// React.render(
//     <ScoreRow score={ amount1[0] } />,
//     document.getElementById('scoreBoard')
// );

// React.render(
//     {
//         cats.map(function(category) {
//             return <div class="scoreBox">{category}</div>
//         })
//     },
//     document.getElementByID('categories')
// );